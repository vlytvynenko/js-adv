//Create bind2 function compose.bind2(function or context)

Function.prototype.bind2 = function (newThis) {
  var boundTargetFunction = this;
  var boundArguments = Array.prototype.slice.call(arguments, 1);
  return function boundFunction() {

    var targetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(
      newThis,
      boundArguments.concat(targetArguments)
    );
  };
}


let user = {firstName: "Name"};
function func(){
  console.log(this.firstName);
}
let funcUser = func.bind2(user)
funcUser();
