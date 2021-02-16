$(document).ready(function () {
  var $calculator = $('#calculator');
  // calculator.html('');

  // create html elements
  // a div to hold the text at the top
  var $screen = $('<div class="screen"><div>');
  // a paragraph element within to add text
  var $screenText = $('<p class="screen"></p>');

  $screen.append($screenText).appendTo($calculator);

  // a container for the top three buttons with class operator
  var $aux = $('<div></div>')
    .attr({
      class: 'container aux'
    });
  // this will contain three buttons
  var $clear = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'clear'
    });
  var $sign = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'sign'
    });
  var $percent = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'percent'
    });
  $aux.append($clear).append($sign).append($percent).appendTo($calculator);

  // a container for the four operators on the right side clas operator
  var $operators = $('<div></div>')
    .attr({
      class: 'container operators'
    });
  // this will contain 5 buttons
  var $division = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'division'
    });
  var $multiplication = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'multiplication'
    });
  var $subtraction = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'subtraction'
    });
  var $addition = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'addition'
    });
  var $equals = $('<button></button>')
    .attr({
      class: 'operator',
      id: 'equals'
    });
  $operators.append($division).append($multiplication).append($subtraction).append($addition).append($equals).appendTo($calculator);

  // a container for all numbers an decimal
  var $numbers = $('<div></div>')
    .attr('class', 'container numbers');
  // this will contain 11 buttons
  var $seven = $('<button></button>')
    .attr({
      class: 'number',
      id: 'seven'
    });
  var $eight = $('<button ></button>')
    .attr({
      class: 'number',
      id: 'eight'
    });
  var $nine = $('<button></button>')
    .attr({
      class: 'number',
      id: 'nine'
    });
  var $four = $('<button></button>')
    .attr({
      class: 'number',
      id: 'four'
    });
  var $five = $('<button></button>')
    .attr({
      class: 'number',
      id: 'five'
    });
  var $six = $('<button></button>')
    .attr({
      class: 'number',
      id: 'six'
    });
  var $one = $('<button></button>')
    .attr({
      class: 'number',
      id: 'one'
    });
  var $two = $('<button></button>')
    .attr({
      class: 'number',
      id: 'two'
    });
  var $three = $('<button></button>')
    .attr({
      class: 'number',
      id: 'three'
    });
  var $zero = $('<button></button>')
    .attr({
      class: 'number',
      id: 'zero'
    });
  var $decimal = $('<button></button>')
    .attr({
      class: 'number',
      id: 'decimal'
    });
  $numbers.append($seven).append($eight).append($nine).append($four).append($five).append($six).append($one).append($two).append($three).append($zero).append($decimal).appendTo($calculator);
  // helper functions

  // listener events

  // add elements to DOM



});
