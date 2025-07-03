const express = require('express');
const router = express.Router();
const { protect, allowRoles } = require('../auth/rbac');
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.post('/', protect, allowRoles('admin'), createPost);
router.get('/', protect, getAllPosts);
router.put('/:id', protect, allowRoles('admin'), updatePost);
router.delete('/:id', protect, allowRoles('admin'), deletePost);

module.exports = router;
