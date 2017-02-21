// Handle keyboard controls
var inputAction = {};

addEventListener("keydown", function (e) {
  inputAction[_returnNameOfKey(e.keyCode)] = true;
}, false);

addEventListener("keyup", function (e) {
  delete inputAction[_returnNameOfKey(e.keyCode)];
}, false);

function _returnNameOfKey(keyCode) {
  var keyName;

  switch (keyCode) {
    case 32:
      keyName = 'space';
      break;

    // Movement
    case 87:
      keyName = 'up';
      break;
    case 65:
      keyName = 'left';
      break;
    case 83:
      keyName = 'down';
      break;
    case 68:
      keyName = 'right';
      break;

    // Action keys
    case 74:
      keyName = 'action1';
      break;
    case 75:
      keyName = 'action2';
      break;
    case 76:
      keyName = 'action3';
      break;

    default:
      keyName = 'none';
  }

  return keyName;
}
