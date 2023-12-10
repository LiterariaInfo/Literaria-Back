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
	'/directory/:articleID/:directoryID',
	authenticateToken,
	articleController.addArticleToDirectory
);

router.put('/recommended', authenticateToken, articleController.addRecommendedArticle);

router.put('/:articleID', authenticateToken, articleController.updateArticle);

router.delete(
	'/:articleID',
	authenticateToken,
	articleController.deleteArticle
);

router.delete(
	'/directory/:articleDirectoryID',
	authenticateToken,
	articleController.removeArticleFromDirectory
);

export default router;
