var mongoose = require('mongoose'),
Image = mongoose.model('topimages');

// Lists all images in the database
exports.list_all_images = function(req, res) {
  Image.find().exec(function(err, images) {
    if (err) {
      res.send(err);
    }
    res.json(images);
  });
};

exports.get_image_name = function(req, res) {
  Image.find({}, function(err, images) {
    if (err) {
      res.send(err);
    }
    res.json(images);
  });
}
