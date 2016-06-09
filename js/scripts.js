$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    if (equilateral(number1, number2, number3)) {
      var result = 'equilateral';
    } else if (isosceles(number1, number2, number3)) {
      var result = 'isosceles';
    } else if (scalene(number1, number2, number3)) {
      var result = 'scalene';
    }
    $("#type").text(result);
});
});

var equilateral = function(number1, number2, number3) {
  return (number1 === number2 && number1 === number3);
};
var isosceles = function (number1, number2, number3) {
  return (number1 === number2 || number2 === number3);
};
var scalene = function (number1, number2, number3) {
  return (number1 !== number2 && number2 !== number3 && number1 !== number3);
};
var not-triangle = function (number1, number2, number3) {
  return ()

}
