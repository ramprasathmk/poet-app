const express = require('express');
const router = express.Router();
const poemsController = require('../controllers/poemsController');

const Poem = require('../models/poem');

exports.getAllPoems = async (req, res) => {
    // try {
    //     const poems = await Poem.find();
    //     res.render('index', { poems }); // Ensure poems is passed here
    // } catch (err) {
    //     res.status(500).send(err);
    // }

    if (err) return err;

    const poems = await Poem.find();
    res.render('index', { poems });
};

router.get('/', poemsController.getAllPoems);
router.post('/', poemsController.createPoem);
router.get('/:id/edit', poemsController.getEditPoem);
router.post('/:id', poemsController.updatePoem);
router.post('/:id/delete', poemsController.deletePoem);

module.exports = router;

