const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
  return /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'You must enter a username'],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please enter a valid email address'],
      validate: [validateEmail, 'Please enter a valid email address'],
      match: [
        /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
        'Please enter a valid email address',
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [UserSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
