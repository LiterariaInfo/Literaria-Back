import express from 'express';
import cors from 'cors';
import articleRouter from './routes/articleRouter';
import directoryRouter from './routes/directoryRouter';
import imageRouter from './routes/imageRouter';
import imageCategoryRouter from './routes/imageCategoryRouter';
import authRouter from './routes/authRouter';
import { register } from './init';
import path from 'path';

const PORT = 6969;

const app = express();

register('admin', 'literaria-admin');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/article/', articleRouter);
app.use('/api/directory/', directoryRouter);
app.use('/api/image/', imageRouter);
app.use('/api/image-category/', imageCategoryRouter);
app.use('/api/login/', authRouter);

app.use('/image', express.static((path.join(__dirname, '../uploads'))));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} ✅`);
});
