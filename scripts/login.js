'use strict'

let userName = document.querySelector('.user_name');
let userPassword = document.querySelector('.user_password');
let submitButton = document.querySelector('.bttn_submit');



submitButton.addEventListener('click', function(){
  localStorage.setItem('User_Name', userName.value);
  localStorage.setItem('User_Password', userPassword.value);
});