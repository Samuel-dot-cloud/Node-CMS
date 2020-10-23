const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('/views/layouts/default.hbs');
});

module.exports = router;