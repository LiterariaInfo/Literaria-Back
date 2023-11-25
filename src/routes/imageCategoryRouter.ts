import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validatorMiddleware';
import imageCategoryController from '../controllers/imageCategoryController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', imageCategoryController.getCategories);

const directoryContentValidator = [
	body('name').exists().isString().isLength({ min: 1, max: 255 })
];

router.post(
	'/',
	authenticateToken,
	directoryContentValidator,
	validate,
	imageCategoryController.createImageCategory
);

router.put(
	'/:imageCategoryId',
	authenticateToken,
	directoryContentValidator,
	validate,
	imageCategoryController.updateImageCategory
);

router.delete(
	'/:imageCategoryId',
	authenticateToken,
	imageCategoryController.deleteImageCategory
);

export default router;
