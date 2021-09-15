const User = require("../models/users");

const getUserController = async (req, res) => {
  try {
    const data = await User.find().exec();
    if (data.length) {
      //sort from descending order await User.find().sort({ createdAt: -1 });
      const users = await User.find();
      res.json(users);
    } else {
      const newUser = await User({
        name: "name",
        username: "username",
        age: "age",
      }).save();
      res.json(newUser);
    }
  } catch (e) {
    res.sendStatus(500).send(e);
  }
};

const getUserIDController = async (req, res) => {
  try {
    //finds data by specific id and sends that specific data back
    const result = await User.findById(req.params.id);
    res.json([result]);
  } catch (e) {
    res.sendStatus(500).send(e);
  }
};

const putUserController = async (req, res) => {
  try {
    //finds the data with the given id and updates it with the data
    const updatedUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUsers);
  } catch (e) {
    res.sendStatus(500).send(e);
  }
};

const posUserController = async (req, res) => {
  try {
    const data = await User.find();
    const length = data.length;
    if (length === 3) {
      //data size limit is 3 elements, so element in index 0 will be removed
      const [{ _id }] = data;
      await User.findByIdAndRemove(_id);
    }
    const newData = await User(req.body).save();
    res.json(newData);
  } catch (e) {
    res.sendStatus(500).send(e);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const data = await User.find();
    const length = data.length;
    if (length) {
      const deletedData = await User.findByIdAndRemove(req.params.id);
      res.json(deletedData);
    }
  } catch (e) {
    res.sendStatus(500).send(e);
  }
};

module.exports = {
  getUserController,
  getUserIDController,
  putUserController,
  posUserController,
  deleteUserController,
};
