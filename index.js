module.exports = rightpad;

function rightpad (str, len) {
  var i = -1;
  len = len - str.length;

  while (++i < len) {
    str += ' ';
  }

  return str;
}
