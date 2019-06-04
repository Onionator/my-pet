
$(document).ready(function() {
  $(".darkMode").click(function() {
    $(".darkMode").toggle();
    $(".lightMode").toggle();
    $("body").addClass("darkBackground");
  });
  $(".lightMode").click(function() {
    $(".darkMode").toggle();
    $(".lightMode").toggle();
    $("body").removeClass("darkBackground");
  });
});
