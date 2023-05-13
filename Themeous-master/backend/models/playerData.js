const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  name: { type: String, required: true },
  user: { type: Types.ObjectId, ref: "user" },
  image : String,
  playerData: Object,
  created_at: Date,
  updated_at: Date,
});

module.exports = model("player", schema);
