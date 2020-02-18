Function.prototype.apply2 = function(newThis, arr) {
  newThis.fnName = this;

  var args = [];
  var results = null;
  if(!arr) {
    result = newThis.fnName;
  } else {
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    //Change eval.
    result = eval("newThis.fnName(" + args + ")");
  }

  return result;
}

var user = { firstName: "Name", surName: "Surname", patronym: "Patronym"};

function showFullName(firstPart, lastPart) {
  console.log( this[firstPart] + " " + this[lastPart] );
}

showFullName.apply2(user, ['firstName', 'surName'])
