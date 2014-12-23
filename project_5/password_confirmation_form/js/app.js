//Problem:  Hints are shown even when form is valid.
//Solution:  Hide and show them at appropriate times.

var $password = $('#password');
var $confirm_password = $('#confirm_password');
var $username = $('#username');

//Hide hints
$('form span').hide();

function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirm_password.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
  
  //Find out if password is valid
  if(isPasswordValid()) {
    
    //Hide hint if its valid
    //Hide the span which comes after the input
    $password.next().hide();
    
  } else {
    
    //Else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent(){
   //Find out if password and confirmation match
   if(arePasswordsMatching()) {
     
      //Hide hint if matched
      $confirm_password.next().hide();
   } else {
   
      //Else show hint
      $confirm_password.next().show();
   } 
}

function enableSubmitEvent() {
  $('.submitButton').prop('disabled', !canSubmit());
}

function usernameEvent() {
  if(isUsernamePresent()){
    $username.next().hide();
  } else {
    $username.next().show();
  }
}

//When event happens on password input
//We've got the password and when we focus on it, it checks if the password is valid
//and wether the confirmed and regular password matches.
//If it doesn't match, it wil sho the hints next to the confirm_password
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
//When event happens on confirmation input
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);
  
enableSubmitEvent();
