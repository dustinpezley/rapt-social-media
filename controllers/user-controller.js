const { User, Thought } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // get single user by id with thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'User not found' });
          return;
        }

        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // post a new user
  createUser(req, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // add a friend to a user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'User not found' });
          return;
        }

        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete user by id
  removeUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id }),
      then(Thought.deleteMany({ username: this.username }))
        .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: 'User not found' });
            return;
          }

          res.json(dbUserData);
        })
        .catch((err) => res.status(500).json(err));
  },

  // delete friend from user's friends list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: { friendId: params.friendId } } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
