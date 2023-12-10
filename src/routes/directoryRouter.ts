import express from 'express';
import directoryController from '../controllers/directoryController';
import upload from '../../multer/upload';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:directoryId', directoryController.getDirectory);

router.post(
  '/',
  authenticateToken,
  upload.single('image'),
  directoryController.createDirectory
);

router.put(
  '/:directoryId',
  authenticateToken,
  directoryController.updateDirectory
);

router.delete(
  '/:directoryId',
  authenticateToken,
  directoryController.deleteDirectory
);

export default router;
