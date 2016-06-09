

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val()
    if (operator == 'add')
    {
    var result = add(number1, number2);
    $("#output").text(result);
  } else if (operator == 'subtract')
   {
    var result = subtract(number1, number2);
    $("#output").text(result);
  } else if (operator == 'multiply')
     {
      var result = multiply(number1, number2);
      $("#output").text(result);
  } else if (operator == 'divide')
      {
      var result = divide(number1, number2);
      $("#output").text(result);
      }
      
  });
});
