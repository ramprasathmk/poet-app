const Poem = require('../models/Poem');

exports.getAllPoems = async (req, res) => {
    const poems = await Poem.find();
    res.render('index', { poems });
};

exports.createPoem = async (req, res) => {
    const { title, body, author } = req.body;
    await Poem.create({ title, body, author });
    res.redirect('/poems');
};

exports.getEditPoem = async (req, res) => {
    const poem = await Poem.findById(req.params.id);
    res.render('edit', { poem });
};

exports.updatePoem = async (req, res) => {
    const { title, body, author } = req.body;
    await Poem.findByIdAndUpdate(req.params.id, { title, body, author });
    res.redirect('/poems');
};

exports.deletePoem = async (req, res) => {
    await Poem.findByIdAndDelete(req.params.id);
    res.redirect('/poems');
};

exports.getEditPoem = async (req, res) => {
    try {
        const poem = await Poem.findById(req.params.id);
        res.render('edit', { poem });
    } catch (err) {
        res.status(500).send(err);
    }
};
