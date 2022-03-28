const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/users', friendRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
