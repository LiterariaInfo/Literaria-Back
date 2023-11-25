import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { handleResponse } from '../handlers/responseHandler';

const getImages = (req: Request, res: Response) => {
	const response = prisma.image.findMany({
		where: {
			categoryID: +req.params.categoryId
		}
	});

	handleResponse(response, res);
};

const createImage = (req: Request, res: Response) => {
	const { author } = req.body;

	const response = prisma.image.create({
		data: {
			author,
			categoryID: +req.params.categoryId,
			image: req.file!.path
		}
	});

	handleResponse(response, res);
};

const deleteImage = (req: Request, res: Response) => {
	const response = prisma.image.delete({
		where: {
			id: +req.params.imageId
		}
	});

	handleResponse(response, res);
};

export default {
	getImages,
	createImage,
	deleteImage
};
