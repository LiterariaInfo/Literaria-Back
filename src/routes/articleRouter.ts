import express from 'express';
import articleController from '../controllers/articleController';
import upload from '../../multer/upload';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:articleId', articleController.getArticle);

router.get('/recent', articleController.getRecent);

router.get('/recommended');

router.post(
	'/',
	authenticateToken,
	upload.single('image'),
	articleController.createArticle
);

router.post(
	'/add/:articleID/:directoryID',
	authenticateToken,
	articleController.addArticleToDirectory
);

router.put('/:articleId', authenticateToken, articleController.updateArticle);

router.delete(
	'/:articleId',
	authenticateToken,
	articleController.deleteArticle
);

router.delete(
	'/remove/:removeArticleFromDirectory',
	authenticateToken,
	articleController.removeArticleFromDirectory
);

export default router;
