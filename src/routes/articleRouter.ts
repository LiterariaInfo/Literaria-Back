import express from 'express';
import articleController from '../controllers/articleController';
import { body } from 'express-validator';
import { validate } from '../middleware/validatorMiddleware';
import upload from '../../multer/upload';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:articleId', articleController.getArticle);

// const articleContentValidator = [
// 	body('author').exists().isString().isLength({ min: 1, max: 255 }),
// 	body('name').exists().isString().isLength({ min: 1, max: 255 }),
// 	body('content').exists().isString(),
// 	body('image').exists().isString(),
// 	body('parentId').exists().isInt()
// ];

router.post(
	'/',
	authenticateToken,
//	articleContentValidator,
//	validate,
	upload.single('image'),
	articleController.createArticle
);

router.put(
	'/:articleId',
	authenticateToken,
//	articleContentValidator,
//	validate,
	articleController.updateArticle
);

router.delete(
	'/:articleId',
	authenticateToken,
	articleController.deleteArticle
);

export default router;
