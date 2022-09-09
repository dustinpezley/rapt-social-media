const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  createReaction,
  updateThought,
  removeThought,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getThoughtById).put(updateThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:thoughtId/reactions').put(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
