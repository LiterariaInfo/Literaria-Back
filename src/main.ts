import express from 'express';
import cors from 'cors';
import articleRouter from './routes/articleRouter';

const PORT = 6969;

const app = express();

app.use(cors());

app.use('/api/article/', articleRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} ✅`);
});
