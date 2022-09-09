const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rapt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DATABASE CONNECTED'))
  .catch((err) => {
    console.log(err);
  });

const updateUser1 = {
  thoughts: ['631ab2835853ce28e50db230'],
};
const updateUser2 = {
  thoughts: ['631ab2835853ce28e50db20e'],
};
const updateUser3 = {
  thoughts: ['631ab2835853ce28e50db215'],
};
const updateUser4 = {
  thoughts: ['631ab2835853ce28e50db21e'],
};
const updateUser5 = {
  thoughts: ['631ab2835853ce28e50db21f'],
};
const updateUser6 = {
  thoughts: ['631ab2835853ce28e50db222'],
};
const updateUser7 = {
  thoughts: ['631ab2835853ce28e50db22b'],
};

const updateDb = async () => {
  await User.updateOne({ username: 'test1' }, updateUser1);
  await User.updateOne({ username: 'test2' }, updateUser2);
  await User.updateOne({ username: 'test3' }, updateUser3);
  await User.updateOne({ username: 'test4' }, updateUser4);
  await User.updateOne({ username: 'test5' }, updateUser5);
  await User.updateOne({ username: 'test6' }, updateUser6);
  await User.updateOne({ username: 'test7' }, updateUser7);
  console.log('USERS UPDATED WITH THOUGHTS');
};

updateDb().then(() => {
  mongoose.connection.close();
});
