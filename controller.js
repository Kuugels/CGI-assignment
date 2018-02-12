var request = require('request');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataSchema = new Schema( {
  data: [{
    title: String,
    url: String,
    author:String
  }]
});

var imageData = mongoose.model('imageData', dataSchema);

// Get images from imgur
exports.getImages = function() {
  var options = {
    url: 'https://api.imgur.com/3/gallery/hot/viral/?showViral=true&album_previews=true',
    headers: {
      Authorization: "Client-ID 1049ee991ed7d71",
    }
  }

  request(options, function(err, res, body) {
    if(err) {
      console.log(err);
    }
    if(res.statusCode === 200) {
      console.log("Succesfully loaded images...");
      var objArr = [];
      for (var i = 0; i < JSON.parse(body).data.length; i++) {
        var data = {
            'title': JSON.parse(body).data[i].title,
            'url': JSON.stringify(JSON.parse(body).data[i].images),
            'author': JSON.parse(body).data[i].account_url
        };
        objArr.push(data);
      }
        updateDb(objArr);
    }
  });
}

// Updates images to database
function updateDb(images) {
  var obj = {
    data: images
  };

  data = new imageData(obj);
  data.save(function(err) {
    if (err) throw err;
  });

}
