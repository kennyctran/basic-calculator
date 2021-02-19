$(document).ready(function () {
  var $calculator = $('#calculator');

  // CREATE STATIC HTML ELEMENTS-----------------
  // Calculator Screen
  var $screen = $('<div></div>');
  var $screenText = $('<p>0</p>');

  // Auxillary Buttons
  var $aux = $('<div></div>').attr('class', 'aux');
  var $clear = $('<button id="clear">c</button>');
  var $sign = $('<button id="sign">+/-</button>');
  var $percent = $('<button id="percent">%</button>');

  // Operator Buttons
  var $operators = $('<div></div>').attr('class', 'operators');
  var $division = $('<button id="division">&divide;</button>');
  var $multiplication = $('<button id="multiplication">x</button>');
  var $subtraction = $('<button id="subtraction">-</button>');
  var $addition = $('<button id="addition">+</button>');
  var $equals = $('<button id="equals">=</button>');

  // Number Buttons
  var $numbers = $('<div></div>').attr('class', 'numbers');
  var $seven = $('<button id="seven">7</button>');
  var $eight = $('<button id="eight">8</button>');
  var $nine = $('<button id="nine">9</button>');
  var $four = $('<button id="four">4</button>');
  var $five = $('<button id="five">5</button>');
  var $six = $('<button id="six">6</button>');
  var $one = $('<button id="one">1</button>');
  var $two = $('<button id="two">2</button>');
  var $three = $('<button id="three">3</button>');
  var $zero = $('<button id="zero">0</button>');
  var $decimal = $('<button id="decimal">.</button>');

  // Class Attributes
  var $allAux = [$clear, $sign, $percent];
  var $allOperators = [$division, $multiplication, $subtraction, $addition, $equals];
  var $allNumbers = [
    $seven,
    $eight,
    $nine,
    $four,
    $five,
    $six,
    $one,
    $two,
    $three,
    $zero,
    $decimal
  ];

  var assignClass = function ($collection, $class) {
    $collection.forEach(function ($e) {
      $e.addClass($class);
    });
  };

  assignClass([$screen, $screenText], 'screen');
  assignClass([$aux, $operators, $numbers], 'container');
  assignClass($allAux, 'auxillary');
  assignClass($allOperators, 'operator');
  assignClass($allNumbers, 'number');

  // FUNCTIONS TO HANDLE EVENT LISTENERS-------------

  var reset = function () {
    window.total = 0;
    $.each(operations, function (op) {
      if (operations[op]) {
        operations[op] = false;
      }
    });
    $('.op-clicked').removeClass('op-clicked');
  };

  var handleOperatorClick = function ($btn) {
    $('.operator').each(function () {
      if ($(this).hasClass('op-clicked')) {
        $(this).removeClass('op-clicked');
      }
    });
    if ($btn.attr('id') !== 'equals') { $btn.addClass('op-clicked'); }
  };

  var handleNumberClick = function ($num, $limit) {
    if ($screenText.text().length < $limit) {
      if ($screenText.text() === '0') {
        $screenText.text('');
      }
      if ($num !== '.') { $screenText.append($num); }
    }
  };

  var handleSignClick = function () {
    var $number = $screenText.text();
    if ($number === '0') { return; }
    if (!$number.match(/-/)) {
      $screenText.prepend('-');
    } else {
      $screenText.text($number.substring(1));
    }
  };

  var handleDecimalClick = function () {
    var $number = $screenText.text();
    if ($number.indexOf('.') === -1 && $number.length <= 8) {
      $screenText.append('.');
    }
  };
  // EVENT LISTENERS--------------------------
  $(document).on('click', '.operator', function () {
    handleOperatorClick($(this));
  });

  $(document).on('click', '.number', function () {
    var $num = $(this).text();
    var $limit = $num[0] === '-' ? 12 : 11;
    handleNumberClick($num, $limit);
  });

  $(document).on('click', '#clear', function () {
    reset();
    $screenText.text('0');
  });

  $(document).on('click', '#sign', function () {
    handleSignClick();
  });

  $(document).on('click', '#decimal', function () {
    handleDecimalClick();
  });

  $(document).on('click', '#percent', function () {
    var $num = Number($screenText.text());
    $screenText.text($num / 100);
  });

  // ADD ELEMENTS TO THE DOM-------------------
  var appendElements = function ($parent, $children) {
    $children.forEach(function ($e) {
      $parent.append($e);
    });
    $parent.appendTo($calculator);
  };

  $screen.append($screenText).appendTo($calculator);
  appendElements($aux, $allAux);
  appendElements($operators, $allOperators);
  appendElements($numbers, $allNumbers);
});

