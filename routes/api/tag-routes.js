const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {

  } catch (err) {

  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {

  } catch (err) {
    
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {

  } catch (err) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {

  } catch (err) {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {

  } catch (err) {
    
  }
});

module.exports = router;
