module.exports = function(app) {
  var imageList = require('../controllers/imageController');

  // todoList Routes
  app.route('/images')
    .get(imageList.list_all_images);

  app.route('/images/:imageTitle')
    .get(imageList.get_image_name);
};
