var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var blogSchema = new Schema({
  'author': ObjectId,
  'title': String,
  'content': String,
  'createdDate': {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('blog', blogSchema);