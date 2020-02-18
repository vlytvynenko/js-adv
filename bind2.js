//Create bind2 function compose.bind2(function or context)

Function.prototype.bind2 = function (fn, context, ...rest) {
  var boundTargetFunction = this;
  var boundArguments = Array.prototype.slice.call(arguments, 1);
  return function boundFunction(...args) {
    var targetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(
      fn,
      boundArguments.concat(targetArguments)
    );
  };
}


let user = {firstName: "Name"};
function func(phone, email){
  console.log(`Name: ${this.firstName}, phone: ${phone}, email: ${email}`);
}
let funcUser = func.bind2(user, 'Phone Here', 'Email Here')
funcUser();
