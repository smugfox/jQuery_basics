//Problem:  It looks bad in smaller browser widths and devices
//Solution:  Hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $('<select></select>');
$('#menu').append($select);
//Cycle over menu links
$('#menu a').each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $('<option></option>');
  
  //Deal with selected options depending on current page
  //We want to see IF the anchors parent has a class of selected
   if ($anchor.parent().hasClass('selected')) {
    $option.prop('selected', true);
   }
  
  //Option value is the href
  //SETTING THE SELECTED VAL
  $option.val($anchor.attr('href'));
  
  //Option's text is the text of link
  var anchorText = $anchor.text();
  $option.text(anchorText);
  
  //Append option to select
  $select.append($option);
});
  
//Create button 
//No longer need button
//var $button = $('<button>Go</button>');
//$('#menu').append($button);

//Bind to button <-- no longer needed

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  //GETTING THE SELECTED VALUE
  window.location = $select.val();
});











