import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (req, res) => {
    res.json({ message: 'Server is running' });
});

app.use('/api', postRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});