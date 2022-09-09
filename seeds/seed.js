const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { Reaction } = require('../models/Thought');

// const userData = require('./userData.json');
// const reactionData = require('./reactionData.json');
// const thoughtData = require('./thoughtData.json');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rapt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DATABASE CONNECTED'))
  .catch((err) => {
    console.log(err);
  });

const seedUsers = [
  {
    username: 'test1',
    email: 'test1@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test2',
    email: 'test2@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test3',
    email: 'test3@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test4',
    email: 'test4@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test5',
    email: 'test5@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test6',
    email: 'test6@email.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'test7',
    email: 'test7@email.com',
    thoughts: [],
    friends: [],
  },
];

const seedReactions = [
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test1',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test3',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test4',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test2',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test4',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test6',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test7',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test4',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test4',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test7',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test1',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test2',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test5',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test6',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test2',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test7',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test4',
  },
  {
    reactionBody: 'Lorem ipsum dolor sit amet',
    username: 'test3',
  },
];

const seedThoughts = [
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test2',
    reactions: [seedReactions[0], seedReactions[1], seedReactions[2]],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test3',
    reactions: [
      seedReactions[3],
      seedReactions[4],
      seedReactions[5],
      seedReactions[6],
    ],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test4',
    reactions: [],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test5',
    reactions: [seedReactions[7]],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test6',
    reactions: [
      seedReactions[8],
      seedReactions[9],
      seedReactions[10],
      seedReactions[11],
    ],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test7',
    reactions: [seedReactions[12], seedReactions[13]],
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'test1',
    reactions: [
      seedReactions[14],
      seedReactions[15],
      seedReactions[16],
      seedReactions[17],
    ],
  },
];

const seedDb = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});
  console.log('DATABASE EMPTY');
  await User.insertMany(seedUsers);
  console.log('USERS SEEDED');
  await Reaction.insertMany(seedReactions);
  console.log('REACTIONS SEEDED');
  await Thought.insertMany(seedThoughts);
  console.log('THOUGHTS SEEDED');
};

seedDb().then(() => {
  mongoose.connection.close();
});
