import Poem from '../models/poem.js';

/**
 * Error handling middleware wrapper for `poemsController`
 */
const asyncHandler = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export const getAllPoems = asyncHandler(async (req, res) => {
  const poems = await Poem.find();
  res.render('poems', { poems });
});

export const createPoem = asyncHandler(async (req, res) => {
  const { title, body, author } = req.body;
  await Poem.create({ title, body, author });
  res.redirect('/poems');
});

export const getEditPoem = asyncHandler(async (req, res) => {
  const poem = await Poem.findById(req.params.id);
  if (!poem) {
    return res.status(404).send('Poem not found');
  }
  res.render('edit', { poem });
});

export const updatePoem = asyncHandler(async (req, res) => {
  const { title, body, author } = req.body;
  const poem = await Poem.findByIdAndUpdate(
    req.params.id,
    { title, body, author },
    { new: true }
  );
  if (!poem) {
    return res.status(404).send('Poem not found');
  }
  res.redirect('/poems');
});

export const deletePoem = asyncHandler(async (req, res) => {
  const poem = await Poem.findByIdAndDelete(req.params.id);
  if (!poem) {
    return res.status(404).send('Poem not found');
  }
  res.redirect('/poems');
});
