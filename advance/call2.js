Function.prototype.call2 = function(fn, context, ...args) {
  const uniqId = Date.now().toString()
  context[uniqId] = fn

  const result = context[uniqId](...args)
  delete context[uniqId]

  return result
}

var user = { firstName: "Name", surName: "Surname", patronym: "Patronym"};

function showFullName(arg1, arg2) {
  console.log( `From object: ${this.firstName}, from args: ${arg1} AND ${arg2}` );
}

Function.prototype.call2(showFullName, user, 'arg1', 'arg2')
