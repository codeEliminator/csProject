'use strict'

let userName = document.querySelector('.user_name');
let userPassword = document.querySelector('.user_password');
let submitButton = document.querySelector('.bttn_submit');


let test = () => {
  localStorage.setItem('User_Name', userName);
  localStorage.setItem('User_Password', userPassword);
}

let test2 = submitButton.addEventListener("click", test)
