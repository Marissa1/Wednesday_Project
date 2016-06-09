var not_triangle = function (number1, number2, number3) {
  return (number1 + number2 <= number3 || number2 + number3 <= number1 || number1 + number3 <= number2);
};
var equilateral = function(number1, number2, number3) {
  return (number1 === number2 && number1 === number3);
};
var isosceles = function (number1, number2, number3) {
  return (number1 === number2 || number2 === number3);
};
var scalene = function (number1, number2, number3) {
  return (number1 !== number2 && number2 !== number3 && number1 !== number3);
};

$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    if (not_triangle(number1, number2, number3)){
      var result = 'not a triangle';
    } else if (equilateral(number1, number2, number3)) {
      var result = 'equilateral';
    } else if (scalene(number1, number2, number3)) {
      var result = 'scalene';
    } else if (isosceles(number1, number2, number3)) {
      var result = 'isosceles';
    }
    $("#type").text(result);
});
});
