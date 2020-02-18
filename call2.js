Function.prototype.call2 = function(newThis) {
  newThis.fnName = this;
  var args = [];

  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
//Change eval.
  return eval("newThis.fnName(" + args + ")");
}

var user = { firstName: "Name", surName: "Surname", patronym: "Patronym"};

function showFullName(firstPart, lastPart) {
  console.log( this[firstPart] + " " + this[lastPart] );
}

showFullName.call2(user, 'firstName', 'surName')
