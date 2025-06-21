const express = require('express');
const { authenticate, authorizeAdmin } = require('../middleware/auth.middleware');
const User = require('../models/user.model');

const router = express.Router();

// Get current user profile
router.get('/me', authenticate, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user: user.toJSON() });
  } catch (error) {
    next(error);
  }
});

// Update current user profile
router.patch('/me', authenticate, async (req, res, next) => {
  try {
    const allowedUpdates = ['name', 'email'];
    const updates = Object.keys(req.body)
      .filter(key => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = req.body[key];
        return obj;
      }, {});

    const [updated] = await User.update(updates, {
      where: { id: req.user.userId },
      returning: true
    });

    if (!updated) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = await User.findByPk(req.user.userId);
    res.json({ user: user.toJSON() });
  } catch (error) {
    next(error);
  }
});

// Admin Routes
// Get all users (admin only)
router.get('/', authenticate, authorizeAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json({ users: users.map(user => user.toJSON()) });
  } catch (error) {
    next(error);
  }
});

// Update user role (admin only)
router.patch('/:userId/role', authenticate, authorizeAdmin, async (req, res, next) => {
  try {
    const { role } = req.body;
    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const [updated] = await User.update({ role }, {
      where: { id: req.params.userId },
      returning: true
    });

    if (!updated) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = await User.findByPk(req.params.userId);
    res.json({ user: user.toJSON() });
  } catch (error) {
    next(error);
  }
});

// Delete user (admin only)
router.delete('/:userId', authenticate, authorizeAdmin, async (req, res, next) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.userId }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 