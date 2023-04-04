$(window).load(function() {
  $('.loading').fadeOut('fast');
  $('.container').fadeIn('fast');
});
var audio = $('.song')[0];

$('document').ready(function() {

  $('#dance1, #dance2').hide();

  $('.num21').css('left', $(window).width()/2 - 80);
  $('.num21').css('top', $(window).height()/2 - 100);

  
  var vw;
  var vh;
  $(window).resize(function() {
    vw = $(window).width() / 2;
    vh = $(window).height() / 2;
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
    $('#b11').animate({ top: 240, left: vw - 450 }, 500);
    $('#b22').animate({ top: 240, left: vw - 350 }, 500);
    $('#b33').animate({ top: 240, left: vw - 250 }, 500);
    $('#b44').animate({ top: 240, left: vw - 150 }, 500);
    $('#b55').animate({ top: 240, left: vw - 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 50 }, 500);
    $('#b77').animate({ top: 240, left: vw + 150 }, 500);
    $('#b88').animate({ top: 240, left: vw + 250 }, 500);
    $('#b99').animate({ top: 240, left: vw + 350 }, 500);
    $('.num21').css('left', vw - 80);
    $('.num21').css('top', vh - 100);

  });

  $('#turn_on').click(function() {
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function() {
      $('#play').fadeIn('slow');
    });
  });
  $('#play').click(function() {
    audio.play();
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');
    $('body').css('backgroud-color', '#FFF');
    $('body').addClass('peach-after');
    $(this).fadeOut('slow').delay(3000).promise().done(function() {
      $('#bannar_coming').fadeIn('slow');
    });

    $('#dance1, #dance2').fadeIn('slow');

  });

  $('#bannar_coming').click(function() {
    $('.bannar').addClass('bannar-come');
    $(this).fadeOut('slow').delay(6000).promise().done(function() {
      $('#balloons_flying').fadeIn('slow');
    });
  });

  function loopOne() {
    var randleft = 500 * Math.random();
    var randtop = 1000 * Math.random();
    $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 300 * Math.random();
    var randtop = 1200 * Math.random();
    $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 700 * Math.random();
    var randtop = 1500 * Math.random();
    $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 600 * Math.random();
    var randtop = 500 * Math.random();
    $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 1000 * Math.random();
    $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1400 * Math.random();
    var randtop = 1200 * Math.random();
    $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopSeven();
    });
  }
  function loopEight() {
    var randleft = 500 * Math.random();
    var randtop = 800 * Math.random();
    $('#b8').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopEight();
    });
  }
  function loopNine() {
    var randleft = 500 * Math.random();
    var randtop = 800 * Math.random();
    $('#b9').animate({ left: randleft, bottom: randtop }, 10000, function() {
      loopNine();
    });
  }

  $('#balloons_flying').click(function() {
    $('.balloon-border').animate({ top: -500 }, 6000);
    $('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
    // $('#b3').addClass('balloons-rotate-behaviour-two');
    // $('#b4').addClass('balloons-rotate-behaviour-one');
    // $('#b5').addClass('balloons-rotate-behaviour-one');
    // $('#b6').addClass('balloons-rotate-behaviour-two');
    // $('#b7').addClass('balloons-rotate-behaviour-one');
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    loopEight();
    loopNine();

    $(this).fadeOut('slow').delay(5000).promise().done(function() {
      $('#cake_fadein').fadeIn('slow');
    });
  });

  $('#cake_fadein').click(function() {
    $('.cake').fadeIn('slow');
    $(this).fadeOut('slow').delay(3000).promise().done(function() {
      $('#light_candle').fadeIn('slow');
    });
  });

  $('#light_candle').click(function() {
    $('.fuego').fadeIn('slow');
    $(this).fadeOut('slow').promise().done(function() {
      $('#wish_message').fadeIn('slow');
    });
  });


  $('#wish_message').click(function() {
    vw = $(window).width() / 2;

    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
    $('#b1').attr('id', 'b11');
    $('#b2').attr('id', 'b22')
    $('#b3').attr('id', 'b33')
    $('#b4').attr('id', 'b44')
    $('#b5').attr('id', 'b55')
    $('#b6').attr('id', 'b66')
    $('#b7').attr('id', 'b77')
    $('#b8').attr('id', 'b88')
    $('#b9').attr('id', 'b99')

    $('#b11').animate({ top: 240, left: vw - 450 }, 500);
    $('#b22').animate({ top: 240, left: vw - 350 }, 500);
    $('#b33').animate({ top: 240, left: vw - 250 }, 500);
    $('#b44').animate({ top: 240, left: vw - 150 }, 500);
    $('#b55').animate({ top: 240, left: vw - 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 50 }, 500);
    $('#b77').animate({ top: 240, left: vw + 150 }, 500);
    $('#b88').animate({ top: 240, left: vw + 250 }, 500);
    $('#b99').animate({ top: 240, left: vw + 350 }, 500);

    $('.balloons').css('opacity', '0.9');
    $('.balloons h2').fadeIn(3000);
    $(this).fadeOut('slow').delay(3000).promise().done(function() {
      $('#story').fadeIn('slow');
    });
  });

  $('#story').click(function() {
    $(this).fadeOut('slow');
    $('.cake').fadeOut('fast').promise().done(function() {
      $('.message').fadeIn('slow');
    });

    var i;

    function msgLoop(i) {
      $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function() {
        i = i + 1;
        if($('p:nth-child(' + i + ')').hasClass('turnt-msg')) i++;
        $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
        if (i == 50) {
          $("p:nth-child(49)").fadeOut('slow').promise().done(function() {
            $('.cake').fadeIn('slow');
            $('#make_wish').fadeIn('slow');
          });

        }
        else {
          msgLoop(i);
        }

      });
      // body...
    }

    $('#make_wish').click(function() {
      audio.pause();
      var wish = $('.wish')[0];
      wish.play();
      $('.fuego').fadeOut('slow');   
      setTimeout(() => {
        $(".cake").fadeOut('slow').promise().done(function() {
          $('#make_wish').fadeOut('slow');
          congrats();
        });
      }, 1000)
      
    })

    msgLoop(0);
  });

  function congrats() {
    var congrats = $('.congrats')[0];
    setTimeout(() => {
      congrats.play();
    }, 400)

    $('.num21').animate({
      opacity: 1,
    }, 2000, () => {
      $('#turnt').animate({
        opacity: 1,
      }, 2000);
    })
  }
});




//alert('hello');