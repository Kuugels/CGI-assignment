var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  data: [{
    title: String,
    url: String,
    author: String
  }]
});

module.exports = mongoose.model('topimages', ImageSchema, 'imagedatas');
