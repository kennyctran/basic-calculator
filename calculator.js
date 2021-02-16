$(document).ready(function () {
  var $calculator = $('#calculator');
  calculator.html('');

  // create html elements
  // a div to hold the text at the top
  var $screen = $('<div class="screen"><div>');
  // a paragraph element within to add text
  var $screenText = $('<p class="screen"></p>');

  // a container for the top three buttons with class operator
  var $aux = $('<div class="button-container aux"></div>');
  // this will contain three buttons
  var $clear = $('<button class="btn operator" id="clear"></button>');
  var $sign = $('<button class="btn operator" id="sign"></button>');
  var $percent = $('<button class="btn operator" id="percent"></button>');

  // a container for the four operators on the right side clas operator
  var $operators = $('<div class="button-container operators"></div>')
    .attr({
      class: 'button-container operators'
    });
  // this will contain 5 buttons
  var $division = $('<button class="btn operator" id="division"></button>');
  var $multiplication = $('<button class="btn operator" id="multiplication"></button>');
  var $subtraction = $('<button class="btn operator" id="subtraction"></button>');
  var $addition = $('<button class="btn operator" id="addition"></button>');
  var $equals = $('<button class="btn operator" id="equals"></button>');

  // a container for all numbers an decimal
  var $numbers = $('<div class="button-container numbers"></div>');
  // this will contain 11 buttons
  var $seven = $('<button class="btn number" id="seven"></button>');
  var $eight = $('<button class="btn number" id="eight"></button>');
  var $nine = $('<button class="btn number" id="nine"></button>');
  var $four = $('<button class="btn number" id="four"></button>');
  var $five = $('<button class="btn number" id="five"></button>');
  var $six = $('<button class="btn number" id="six"></button>');
  var $one = $('<button class="btn number" id="one"></button>');
  var $two = $('<button class="btn number" id="two"></button>');
  var $three = $('<button class="btn number" id="three"></button>');
  var $zero = $('<button class="btn number" id="zero"></button>');
  var $decimal = $('<button class="btn number" id="decimal"></button>');

  // helper functions

  // listener events

  // add elements to DOM



});
