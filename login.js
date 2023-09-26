
// login.js

// Function to validate the form

    var emailInput = document.getElementById('exampleInputEmail1');
    var email1= document.getElementById('email1');
    var passwordInput = document.getElementById('password');
    var pwdcheck= document.getElementById('pwdcheck');

     function validateEmail(){
  
    // Check if all fields are filled
    if (emailInput.value == '' ){
      email1.innerText= "This field cannot be empty";
      email1.style.color= "red";  
      return false;
    }else{
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
       if (emailPattern.test(emailInput.value)){
        email1.innerText= "valid Email address";
        email1.style.color= "green";
      return true;
    }else{
      email1.innerText= "Invalid E-mail Address";
      email1.style.color= "red";
      return false
    }}
  }

  function validatepassword(){
  if(passwordInput.value=="")
  pwdcheck.innertext="This field cannot be empty";
  pwdcheck.style.color="red";
  pwdStrengthDispley.classList.add('weakpassword');
  return false;
  }
  
