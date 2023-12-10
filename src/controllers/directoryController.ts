import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { handleResponse } from '../handlers/responseHandler';

const getDirectory = (req: Request, res: Response) => {
	const response = prisma.directory.findUnique({
		where: {
			id: +req.params.directoryId
		},
		include: {
			directories: true,
			articleDirectory: {
				select: {
					article: true,
				}
			}
		}
	});

	handleResponse(response, res);
};

const createDirectory = (req: Request, res: Response) => {
	const { name, parentID, description } = req.body;

	const response = prisma.directory.create({
		data: {
			name,
			description,
			parentID: +parentID,
			image: req.file!.filename
		}
	});

	handleResponse(response, res);
};

const updateDirectory = (req: Request, res: Response) => {
	const { name, parentID, description } = req.body;

	const response = prisma.directory.update({
		where: {
			id: +req.params.directoryId
		},
		data: {
			name,
			description,
			parentID: parentID
		}
	});

	handleResponse(response, res);
};

const deleteDirectory = (req: Request, res: Response) => {
	const response = prisma.directory.delete({
		where: {
			id: +req.params.directoryId
		}

	});

	handleResponse(response, res);
};

export default {
	getDirectory,
	createDirectory,
	updateDirectory,
	deleteDirectory
};
