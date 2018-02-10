
function constructTable() {
  var imageArray = 25; //test
  var out = '<table class="table"><tbody>';

  for (var i = 0; i < imageArray; i++) {
    out += '<tr><td><img src="https://i.imgur.com/QcdIUC5.jpg" class="img-thumbnail" alt="Imgur image"></td>'+
    '<td><img src="https://i.imgur.com/QcdIUC5.jpg" class="img-thumbnail" alt="Imgur image"></td>'+
    '<td><img src="https://i.imgur.com/QcdIUC5.jpg" class="img-thumbnail" alt="Imgur image"></td>'+
    '<td><img src="https://i.imgur.com/QcdIUC5.jpg" class="img-thumbnail" alt="Imgur image"></td>'+
    '</tr>';
  }
  out += '</tbody></table>';
  document.getElementById('images').innerHTML = out;
}

window.onload = function() {
  constructTable();
}
