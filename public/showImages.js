
function constructTable() {
  var imageArray = 25; //test
  var out = '<table class="table"><tbody>';

  for (var i = 0; i < imageArray; i++) {
    out += '<tr><td>IMAGE</td><td>IMAGE</td><td>IMAGE</td><td>IMAGE</td></tr>';
  }
  out += '</tbody></table>';
  document.getElementById('images').innerHTML = out;
}

window.onload = function() {
  constructTable();
}
