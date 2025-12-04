import express from 'express';
import { getAllPoems, createPoem, getEditPoem, updatePoem, deletePoem } from '../controllers/poemsController.js';

const router = express.Router();
router.get('/', getAllPoems);
router.post('/', createPoem);
router.get('/:id/edit', getEditPoem);
router.post('/:id', updatePoem);
router.post('/:id/delete', deletePoem);

export default  router;
