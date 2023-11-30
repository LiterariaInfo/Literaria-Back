import express from 'express';
import articleController from '../controllers/articleController';
import upload from '../../multer/upload';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/latest', articleController.getRecent);

router.get('/recommended', articleController.getRecommended);

router.get('/:articleId', articleController.getArticle);

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

router.post('/add-recommended/:articleID', authenticateToken, articleController.addRecommendedArticle);

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

router.delete(
	'/remove-recommended/:recommendedArticleID',
	authenticateToken,
	articleController.removeRecommendedArticle
);

export default router;
