Function.prototype.apply2 = function(fn, context, arr) {
  const uniqId = Date.now().toString()

  context[uniqId] = fn

  const result = context[uniqId](...arr)
  delete context[uniqId]

  return result
}

var user = { firstName: "Name", surName: "Surname", patronym: "Patronym"};

function showFullName(arg1, arg2) {
  console.log(` This is context - ${this.surName} and this is arguments - ${arg1}, ${arg2} `);
}

Function.prototype.apply2(showFullName, user, ['argument 1', 'argument 2'])
