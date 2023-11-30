import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const login = (req: Request, res: Response) => {
	const { user, password } = req.body;

	prisma.admin
		.findUnique({
			where: {
				user
			}
		})
		.then((user) => {
			if (!user)
				return res.status(404).json({ message: 'Wrong user or password' });

			bcrypt
				.compare(password, user.password)
				.then((validPassword) => {
					if (!validPassword)
						return res.status(401).json({ message: 'Wrong user or password' });

					res.json({ token: jwt.sign({ id: user.id }, process.env.KEY!) });
				})
				.catch((e) => {
					res.status(500).json(e);
				});
		})
		.catch((e) => {
			res.status(500).json(e);
		});
};

export default { login };
