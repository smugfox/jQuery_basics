//Problem:  User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image.  Lightbox.

//Assign jQuery Object to variable (that's why there's a $ sign at the beginning)
var $overlay = $('<div class="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$('body').append($overlay);
  
//Capture the click event on a link to an image.
$('.image-gallery a').click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  
  //Update overlay with the image linked in the link.
  //We want to update the source with the href of the link
  $image.attr('src', imageLocation);
  
  //Show the overlay.
  $overlay.show();

  //Get child's alt atribute and set caption.
  //This = anchor that we just clicked on
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});
  
//When overlay is clicked
$overlay.click(function() {
  
  //Hide the overlay
  $overlay.hide();
});
