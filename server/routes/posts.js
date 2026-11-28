import { Router } from 'express';
import { Post, User } from '../db.js';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/posts', async (req, res) => {
    const posts = await Post.findAndCountAll({

    })
})