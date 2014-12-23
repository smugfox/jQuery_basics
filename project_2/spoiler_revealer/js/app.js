//Prevent spoilerphobes from seeing the spoilers


//Solution: Hide spoilers and reveal them through user interaction
//1.  Hide spoiler
$('.spoiler span').hide();
//2.  Add a button
$('.spoiler').append('<button>Reveal Spoiler!</button>');
//3.  When button is pressed
$('button').click(function(){
  //3.1  Show spoiler next to the button clicked
  //Select the button, and then the previous elements is the span, and show that.
  $(this).prev().show();
//  $('.spoiler span').show();
  //3.2  Get rid of button
  $(this).remove();
});
    