const pass = document.querySelector('#password');
const pass2 = document.querySelector('#cpassword');

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('cpassword').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      document.getElementById('submit').disabled = false;
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "your passwords don't match";
      document.getElementById('submit').disabled = true;
    }
  }