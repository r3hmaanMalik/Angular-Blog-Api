var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blogController.js');

/*
 * GET
 */
router.get('/', blogController.list);

/*
 * GET
 */
router.get('/:id', blogController.show);

/*
 * POST
 */
router.post('/', blogController.create);

/*
 * PUT
 */
router.put('/:id', blogController.update);

/*
 * DELETE
 */
router.delete('/:id', blogController.remove);

module.exports = router;
