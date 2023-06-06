$(document).ready(function() {
    var currentLocation = window.location.pathname;
  
    $('nav a').each(function() {
      var linkHref = $(this).attr('href');
      
      if (currentLocation.includes(linkHref)) {
        $(this).addClass('current');
      }
    });
  });