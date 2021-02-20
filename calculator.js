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

  // var opStored = function () {
  //   $.each(operations, function (i, stored) {
  //     if (stored) {
  //       total = calculate[i](total, currentNum);
  //       screenText.text(total);
  //     }
  //   });
  // };

  var reset = function () {
    window.total = 0;
    $.each(operations, function (op) {
      if (operations[op]) {
        operations[op] = false;
      }
    });
    window.pending = false;
    window.currentNum = 0;
    window.first = true;
    $('.op-clicked').removeClass('op-clicked');
    $screenText.text('0');
  };

  var handleOperatorClick = function ($btn) {

    if ($btn.attr('id') !== 'equals') {
      $('.op-clicked').removeClass('op-clicked')
      $btn.addClass('op-clicked');

      if (window.operations.equals) {
        window.operatins.equals = false;
      }

      if (first) {
        first = false;
        total = Number($screenText.text());
      } else {
        $.each(operations, function (k, op) {
          if (op) {
            total = calculate[k](total, Number($screenText.text()));
            current = Number($screenText.text());
            $screenText.text(total);
            operations[k] = false;
          }
        });
      }

      // assign Number($screenText.text()) to currentNum
      // currentNum = Number($screenText.text());
      // the recently clicked op is now true
      operations[$btn.attr('id')] = true;

    }
    pending = true;
  };

  var handleNumberClick = function ($num, $limit) {
    // if an operator is highlighted, unhighlight when clicking a number
    if ($('.op-clicked').length > 0) {
      $('.op-clicked').removeClass('op-clicked');
      $screenText.text('');
    }
    // if any operation is stored and num is pending, reset screen, not working for equals
    // because there is no property for equals due to chaining equals for now
    $.each(operations, function (i, stored) {
      if (stored && pending) {
        pending = false;
        $screenText.text('');
      }
    });

    if ($num !== '.') {
      if ($screenText.text().length < $limit) {
        if ($screenText.text() === '0') {
          $screenText.text('');
        }
        $screenText.append($num);
      }
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
    var $limit = $num[0] === '-' ? 9 : 8;
    handleNumberClick($num, $limit);
  });

  $(document).on('click', '#clear', function () {
    reset();
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

  $(document).on('click', '#equals', function () {
    var calc;

    if (!operations.equals) {
      $.each(operations, function (k, op) {
        if (op) {
          total = calculate[k](total, Number($screenText.text()));
          currentNum = Number($screenText.text());
          window.operations.equals = true;
          $screenText.text(total);
          return;
        }
      });

    } else {
      $.each(operations, function (k, op) {
        if (op) {
          total = calculate[k](Number($screenText.text()), currentNum);
          $screenText.text(total);
        }
      });
    }

    $('.op-clicked').removeClass('op-clicked');
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

