const User = require("../lib/mongo.js").User;
module.exports = {
  create: async function (user) {
    return await User.create(user);
  },
};
