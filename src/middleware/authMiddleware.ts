import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('Authorization');

	if (!token) return res.status(401).json({ message: 'Unauthorized' });

	jwt.verify(token.slice(7), process.env.KEY!, (err, user) => {
		if (err) return res.status(403).json({ message: 'Forbidden' });

		next();
	});
};

export { authenticateToken };
