$(function() {

  var form = $('#contactform');

  var formMessages = $('#formmessages');

  $(form).submit(function(e) {
    e.preventDefault();

    var formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      $(formMessages).text(response);

      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});

$(document).ready(function() {

  $('.slides a').smoothScroll();

  $('#more').click(function() {
    $('#sidenavwrap').animate({
      width: 'toggle'
    }, 250);

  });

  $(window).resize(function() {
    if($(window).width() >= 768) {
      $('#sidenavwrap').hide();
    }
  });

  $(function() {
    var slideNumber = 1;

    showSlides(slideNumber);

    setInterval(automatic, 10000);

    $('.prev').click(function() {
      plusSlides(-1);
    });

    $('.next').click(function() {
      plusSlides(1);
    });

    function automatic() {
      slideNumber++;
      showSlides(slideNumber);
    }

    function plusSlides(n) {
      showSlides(slideNumber += n);
    }

    function currentSlide(n) {
      showSlides(slideNumber = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideNumber = 1} 
      if (n < 1) {slideNumber = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideNumber-1].style.display = "block"; 
      dots[slideNumber-1].className += " active";
    }

  });

  $('.fancybox').fancybox();

  $('.linelink').fancybox();

});
