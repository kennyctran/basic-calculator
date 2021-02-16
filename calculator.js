$(document).ready(function () {
  var $calculator = $('#calculator');
  // calculator.html('');

  // create html elements
  // a div to hold the text at the top
  var $screen = $('<div class="screen"><div>');
  // a paragraph element within to add text
  var $screenText = $('<p class="screen"></p>');

  // a container for the top three buttons with class operator
  var $aux = $('<div></div>')
    .attr({
      class: 'container aux'
    });
  // this will contain three buttons
  var $clear = $('<button>C</button>')
    .attr({
      class: 'operator',
      id: 'clear'
    });
  var $sign = $('<button>+/-</button>')
    .attr({
      class: 'operator',
      id: 'sign'
    });
  var $percent = $('<button>%</button>')
    .attr({
      class: 'operator',
      id: 'percent'
    });

  // a container for the four operators on the right side clas operator
  var $operators = $('<div></div>')
    .attr({
      class: 'container operators'
    });
  // this will contain 5 buttons
  var $division = $('<button>&divide;</button>')
    .attr({
      class: 'operator',
      id: 'division'
    });
  var $multiplication = $('<button>X</button>')
    .attr({
      class: 'operator',
      id: 'multiplication'
    });
  var $subtraction = $('<button>&mdash;</button>')
    .attr({
      class: 'operator',
      id: 'subtraction'
    });
  var $addition = $('<button>+</button>')
    .attr({
      class: 'operator',
      id: 'addition'
    });
  var $equals = $('<button>=</button>')
    .attr({
      class: 'operator',
      id: 'equals'
    });

  // a container for all numbers an decimal
  var $numbers = $('<div></div>')
    .attr('class', 'container numbers');
  // this will contain 11 buttons
  var $seven = $('<button>7</button>')
    .attr({
      class: 'number',
      id: 'seven'
    });
  var $eight = $('<button>8</button>')
    .attr({
      class: 'number',
      id: 'eight'
    });
  var $nine = $('<button>9</button>')
    .attr({
      class: 'number',
      id: 'nine'
    });
  var $four = $('<button>4</button>')
    .attr({
      class: 'number',
      id: 'four'
    });
  var $five = $('<button>5</button>')
    .attr({
      class: 'number',
      id: 'five'
    });
  var $six = $('<button>6</button>')
    .attr({
      class: 'number',
      id: 'six'
    });
  var $one = $('<button>1</button>')
    .attr({
      class: 'number',
      id: 'one'
    });
  var $two = $('<button>2</button>')
    .attr({
      class: 'number',
      id: 'two'
    });
  var $three = $('<button>3</button>')
    .attr({
      class: 'number',
      id: 'three'
    });
  var $zero = $('<button>0</button>')
    .attr({
      class: 'number',
      id: 'zero'
    });
  var $decimal = $('<button>.</button>')
    .attr({
      class: 'number',
      id: 'decimal'
    });

  // helper functions

  // listener events

  // add elements to DOM
  $screen.append($screenText)
    .appendTo($calculator);

  $aux.append($clear)
    .append($sign)
    .append($percent)
    .appendTo($calculator);

  $operators.append($division)
    .append($multiplication)
    .append($subtraction)
    .append($addition)
    .append($equals)
    .appendTo($calculator);

  $numbers.append($seven)
    .append($eight)
    .append($nine)
    .append($four)
    .append($five)
    .append($six)
    .append($one)
    .append($two)
    .append($three)
    .append($zero)
    .append($decimal)
    .appendTo($calculator);



});
