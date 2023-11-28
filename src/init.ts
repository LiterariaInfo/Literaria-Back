import prisma from '../prisma/prisma';
import bcrypt from 'bcrypt';

const register = (user: string, password: string) => {
	bcrypt
		.hash(password, 10)
		.then((hashedPassword) => {
			prisma.admin
				.create({
					data: {
						password: hashedPassword,
						user
					}
				})
				.catch((e) => {
					console.log(e)
				});
		})
		.catch((e) => {
			console.log(e)
		});
};

export {
	register
}