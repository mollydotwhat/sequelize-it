const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const payload = await Tag.findAll(
      {
        include: [{
          model: Product,
          through: {
            attributes: ['id', "product_id", "tag_id"],
          },
          as: 'products'
        }]
      }
    );
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const payload = await Tag.findByPk(
      req.params.id,
      {
        include: [{
          model: Product,
          through: {
            attributes: ['id', "product_id", "tag_id"],
          },
          as: 'products'
        }]
      }
    );
    res.status(200).json(payload);

  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const payload = await Tag.create(req.body);
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const payload = await Tag.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const payload = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
