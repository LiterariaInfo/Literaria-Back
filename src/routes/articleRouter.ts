import express from 'express';
import articleController from '../controllers/articleController';
import { body } from 'express-validator';
import { validate } from '../middleware/validatorMiddleware';

const router = express.Router();

router.get('/:articleId', articleController.getArticle);

const articleContentValidator = [
	body('author').exists().isString().isLength({ min: 1, max: 255 }),
    body('name').exists().isString().isLength({ min: 1, max: 255 }),
    body('content').exists().isString(),
    body('image').exists().isString(),
    body('parentId').exists().isInt()
];

router.post('/', articleContentValidator, validate, articleController.createArticle);

export default router;
