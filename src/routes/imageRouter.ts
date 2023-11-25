import express from 'express';
import imageController from '../controllers/imageController';
import upload from '../../multer/upload';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:categoryId', imageController.getImages);

router.post('/:categoryId', authenticateToken, upload.single('image'), imageController.createImage);

router.delete('/:imageId', authenticateToken, imageController.deleteImage);

export default router;
