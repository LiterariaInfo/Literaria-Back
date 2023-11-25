import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { handleResponse } from '../handlers/responseHandler';

const getCategories = (req: Request, res: Response) => {
    const response = prisma.imageCategory.findMany();

    handleResponse(response, res);
}

const createImageCategory = (req: Request, res: Response) => {
	const { name } = req.body;

	const response = prisma.imageCategory.create({
		data: {
			name
		}
	});

	handleResponse(response, res);
};

const updateImageCategory = (req: Request, res: Response) => {
	const { name } = req.body;

	const response = prisma.imageCategory.update({
		where: {
			id: +req.params.imageCategoryId
		},
		data: {
			name
		}
	});

	handleResponse(response, res);
};

const deleteImageCategory = (req: Request, res: Response) => {
	const response = prisma.imageCategory.delete({
		where: {
			id: +req.params.imageCategoryId
		}
	});

	handleResponse(response, res);
};

export default {
    getCategories,
    createImageCategory,
    updateImageCategory,
    deleteImageCategory
}