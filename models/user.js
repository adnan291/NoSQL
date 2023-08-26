const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();

    return db
      .collection("users")
      .inserOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(result);
      });
  }

  static findUserById(userId) {
    const db = getDb();

    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next()
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = User;
