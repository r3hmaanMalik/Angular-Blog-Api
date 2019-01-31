var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var blogSchema = new Schema({
  'author': ObjectId,
  'content': String
});

module.exports = mongoose.model('blog', blogSchema);