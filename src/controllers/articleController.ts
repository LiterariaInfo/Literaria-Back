import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { handleResponse } from '../handlers/responseHandler';

const getArticle = (req: Request, res: Response) => {
	const response = prisma.article.findUnique({
		where: {
			id: +req.params.articleId
		},
		include: {
			articleContent: {
				select: {
					content: true
				}
			}
		}
	});

	handleResponse(response, res);
};

const createArticle = (req: Request, res: Response) => {
	const { author, name, content, parentId } = req.body;

	const response = prisma.article.create({
		data: {
			author,
			name,
			articleContent: {
				create: {
					content
				}
			},
			image: req.file!.path
		}
	});

	handleResponse(response, res);
};

const updateArticle = (req: Request, res: Response) => {
	const { author, name, content, image, parentId } = req.body;

	const response = prisma.article.update({
		where: {
			id: +req.params.articleId
		},
		data: {
			author,
			name,
			articleContent: {
				create: {
					content
				}
			},
			image
		}
	});

	handleResponse(response, res);
};

const deleteArticle = (req: Request, res: Response) => {
	const response = prisma.article.delete({
		where: {
			id: +req.params.articleId
		}
	});

	handleResponse(response, res);
};

export default {
	getArticle,
	createArticle,
	updateArticle,
	deleteArticle
};
