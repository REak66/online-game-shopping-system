const express = require('express');
const router = express.Router();
const { getDashboardStats, getUsers, updateUser, deleteUser } = require('../controllers/admin.controller');
const { protect, authorize } = require('../middleware/auth');

router.use(protect, authorize('admin'));
router.get('/dashboard', getDashboardStats);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
