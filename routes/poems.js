import express from 'express';
import { getAllPoems, createPoem, getEditPoem, updatePoem, deletePoem } from '../controllers/poemsController.js';

const router = express.Router();
router.get('/', getAllPoems);
router.post('/', createPoem);
router.get('/:id/edit', getEditPoem);
router.put('/:id', updatePoem);
router.delete('/:id/delete', deletePoem);

export default  router;
