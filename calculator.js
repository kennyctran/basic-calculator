$(document).ready(function () {
  var $calculator = $('#calculator');
  calculator.html('');

  // create html elements
  // a div to hold the text at the top
  var $screen = $('<div class="screen"><div>');
  // a paragraph element within to add text
  var $screenText = $('<p class="screen"></p>');

  // a container for the top three buttons with class operator
  var $aux = $('<div></div>')
    .attr({
      class: 'button-container aux'
    });
  // this will contain three buttons
  var $clear = $('<button class="btn operator" id="clear"></button>')
    .attr({
      class: 'btn operator',
      id: 'clear'
    });
  var $sign = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'sign'
    });
  var $percent = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'percent'
    });

  // a container for the four operators on the right side clas operator
  var $operators = $('<div></div>')
    .attr({
      class: 'button-container operators'
    });
  // this will contain 5 buttons
  var $division = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'division'
    });
  var $multiplication = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'multiplication'
    });
  var $subtraction = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'subtraction'
    });
  var $addition = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'addition'
    });
  var $equals = $('<button></button>')
    .attr({
      class: 'btn operator',
      id: 'equals'
    });

  // a container for all numbers an decimal
  var $numbers = $('<div></div>')
    .attr('class', 'button-container numbers');
  // this will contain 11 buttons
  var $seven = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'seven'
    });
  var $eight = $('<button ></button>')
    .attr({
      class: 'btn number',
      id: 'eight'
    });
  var $nine = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'eight'
    });
  var $four = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'four'
    });
  var $five = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'five'
    });
  var $six = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'six'
    });
  var $one = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'one'
    });
  var $two = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'two'
    });
  var $three = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'three'
    });
  var $zero = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'zero'
    });
  var $decimal = $('<button></button>')
    .attr({
      class: 'btn number',
      id: 'decimal'
    });

  // helper functions

  // listener events

  // add elements to DOM



});
