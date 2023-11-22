import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { handleResponse } from '../handlers/responseHandler';

const getArticle = (req: Request, res: Response) => {
	const response = prisma.article.findUnique({
		where: {
			id: +req.params.articleId
		}
	});

	handleResponse(response, res);
};

const createArticle = (req: Request, res: Response) => {
	const { author, name, content, image, parentId } = req.body;

	const response = prisma.article.create({
		data: {
			author,
			name,
			articleContent: {
				create: {
					content
				}
			},
			image,
			parentId: parentId
		}
	});

	handleResponse(response, res);
};

export default {
	getArticle,
	createArticle
};
