// var btns = document.getElementsByClassName("btn");
// var btns = document.getElementsById("btn");
// var btns = document.getElementsByTagName("btn");

//       for (var btn of btns) {
//         btn.onclick = function () {
//           window.alert("hello");
//         };
//       }
      
// var: When declared, it is considered as global-variable.
// var: Only accessible inside of the block of code.
// const: One time declaration

// Lambda expression: =>
// var legalAge = age >=18 ? true : false (shorthand if statement)
// var totalAdd = (x, y) => x + y;                (shorthand function)
// Operator: Arithmetic (+-*/)
//                 Assignment (=,/=,x=,+=,-=)
//                 Comparison (>,<,>=,<=,==)
//                 Logical (||, &&, !=)
//                 Ternary: ? 
// Spread: ...

for (var i = 1; i <= 5; i++) {
    var r = "";
    for (var j = 5; j >= i; j--) {
      r += "*";
    }
    console.log(r);
  }