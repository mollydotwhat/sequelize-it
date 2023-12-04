const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const payload = Category.findAll(
      {
        include: { model: Product }
      }
    );
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const payload = Category.findByPk(
      req.params.id,
      {
        include: {model : Product}
      }
    );
    res.status(200).json(payload)
  } catch (err) {

  }
});

router.post('/', (req, res) => {
  // create a new category
  const payload = Category.create(req.body);
  res.json(payload);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update()
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
