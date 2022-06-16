const express = require('express');
const { default: next } = require('next');
const router = express.Router();
const PostsService = require('../service/postsService');

const postsService = new PostsService();

// get all
router.get('/posts', async (req, res) => {
	try {
		const posts = await postsService.getPosts();
		res.status(200).json(posts);
	} catch (e) {
		next(e);
	}
});

// get by id
router.get('/posts/:id', async (req, res) => {

});

// insert
router.post('/posts', async (req, res, next) => {
	const post = req.body;
	try {
		const newPost = await postsService.savePost(post);
		res.status(201).json(newPost);
	} catch (e) {
		next(e);
	}
});

// update
router.put('/posts/:id', async (req, res, next) => {
	const post = req.body;
	try {
		await postsService.updatePost(req.params.id, post);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

// delete
router.delete('/posts/:id', async (req, res) => {
	try {
		await postsService.deletePost(req.params.id);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

module.exports = router;