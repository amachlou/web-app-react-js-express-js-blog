 
const router = require('express').Router();
const tagsRepo = require('../repositories/tags')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await tagsRepo.getAllTags());
});

router.get('/:id', async function(req, res, next) {
  res.send(await tagsRepo.getTag(req.params.id))
});



module.exports = router;