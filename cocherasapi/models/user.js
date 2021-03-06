var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id:             { type: String },
    name:           { type: String },
    password:       { type: String },
    mail:           { type: String },
    phone:          { type: String },
    autoLogin:      { type: Boolean }
});

module.exports = mongoose.model("User", userSchema);