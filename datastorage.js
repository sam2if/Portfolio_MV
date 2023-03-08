const a = document.getElementById('#form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textAreaBoxInput = document.getElementById('msg');
const formStorage = document.getElementById('form');

let userInfo = JSON.parse(localStorage.getItem('userInfo'));

if (userInfo !== null) {
  if (userInfo.hasOwnProperty.call('username')) {
    nameInput.value = userInfo.username;
  }
  if (userInfo.hasOwnProperty.call('email')) {
    emailInput.value = userInfo.email;
  }
  if (userInfo.hasOwnProperty.call('msg')) {
    textAreaBoxInput.value = userInfo.msg;
  }
} else {
  userInfo = {};
}