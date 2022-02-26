$('.nav a').click(function() {

    //remove all active classes
    $('.nav a').removeClass("active");
  
    //add active to the element clicked
    $(this).addClass("active");
  
});