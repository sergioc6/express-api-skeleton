const { validationResult } = require("express-validator");
const { User } = require("../db/models/index");

exports.list = async (req, res) => {
  res.json(await User.findAll());
};

exports.find = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

exports.create = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.edit = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(await user.update(req.body));
};

exports.delete = async (req, res) => {
  res.json(
    await User.destroy({
      where: {
        id: req.params.id,
      },
    })
  );
};
