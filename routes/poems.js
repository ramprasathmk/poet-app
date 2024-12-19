const express = require('express')
const router = express.Router()
const poemsController = require('../controllers/poemsController')

router.get('/', poemsController.getAllPoems)
router.post('/', poemsController.createPoem)
router.get('/:id/edit', poemsController.getEditPoem)
router.post('/:id', poemsController.updatePoem)
router.post('/:id/delete', poemsController.deletePoem)

module.exports = router
