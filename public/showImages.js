
window.onload = function() {
  document.getElementById('usr').onkeypress = function() {
    searchImages();
  }
  showImages();
}

function searchImages() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);

        document.getElementById('images').innerHTML = '<img src="https://i.imgur.com/rF6JTnh.png" class="img-thumbnail" alt="Imgur image">';
        document.getElementById('imgTitle').innerHTML = 'Super Awesome Title';
      }
    };
    xhttp.open("GET", "/images/list_all_images", true);
    xhttp.send();

    if (document.getElementById('usr').value == "") {
      showImages();
    }
}

function showImages() {
  var imageArray = 25; //test
  var out = '<table class="table"><tbody>';

  for (var i = 0; i < imageArray; i++) {
    out += '<tr><td><img src="https://i.imgur.com/GP0ZiBs.png" class="img-thumbnail" alt="Imgur image" onClick="changeImage(1)"></td>'+
    '<td><img src="https://i.imgur.com/QcdIUC5.jpg" class="img-thumbnail" alt="Imgur image" onClick="changeImage(2)"></td>'+
    '<td><img src="https://i.imgur.com/ycEyrKi.png" class="img-thumbnail" alt="Imgur image" onClick="changeImage(3)"></td>'+
    '<td><img src="https://i.imgur.com/vDESqEh.jpg" class="img-thumbnail" alt="Imgur image" onClick="changeImage(4)"></td>'+
    '</tr>';
  }
  out += '</tbody></table>';
  document.getElementById('images').innerHTML = out;
}

function changeImage(num) {
  if (num == 1) {
    document.getElementById('image').innerHTML = '<img src="https://i.imgur.com/GP0ZiBs.png" class="img-responsive" alt="Imgur image">'
  }else if (num == 2) {
    document.getElementById('image').innerHTML = '<img src="https://i.imgur.com/QcdIUC5.jpg" class="img-responsive" alt="Imgur image">'
  }else if (num == 3) {
    document.getElementById('image').innerHTML = '<img src="https://i.imgur.com/ycEyrKi.png" class="img-responsive" alt="Imgur image">'
  }else if (num == 4) {
    document.getElementById('image').innerHTML = '<img src="https://i.imgur.com/vDESqEh.jpg" class="img-responsive" alt="Imgur image">'
  }
}
