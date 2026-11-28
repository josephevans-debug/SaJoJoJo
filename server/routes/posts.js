import { Router } from 'express';
import { Post, User } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const author = { model: User, as: "author", attributes: ["username"] };

router.get("/posts", async (req, res) => {
    const posts = await Post.findAndCountAll({
        include: author,
        order: [["createdAt", "DESC"]],
    });
    res.json(posts);
});

router.get("/posts/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id, { include: author });
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

export default router;