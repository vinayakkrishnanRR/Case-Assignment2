//variable declaration
    var firstName = document.getElementById("name");
    var secondName = document.getElementById("name1");
    var lastName = document.getElementById("name2");
    var phoneNumber = document.getElementById("phn");
    var confirmNumber = document.getElementById("numConfirm");
    var Email = document.getElementById("email");
    var confirmEmail = document.getElementById("emailConfirm");
    var password = document.getElementById("password");
    var passCheck = document.getElementById("passCheck");
    var passwordReentered = document.getElementById("pwdre");
    var confirmPassword= document.getElementById("passConfirm");
    const passStrengthDisplay = document.getElementById("passStrengthDisplay");
    const form=document.getElementById("signupform")
  
    //validation conditions

    function validateMail(){
      if(Email.value==""){
        confirmEmail.innerText= "This field cannot be left blank";
        confirmEmail.style.color= "red";  
        return false      
       }else{
        const emailRegex= /^([a-zA-Z0-9\.-]+)@([a-z]+)\.([a-z]{2,3})(\.[a-z]{2,4})?$/;
        if(emailRegex.test(Email.value)){
          confirmEmail.innerText= "E-mail valid";
          confirmEmail.style.color= "green";
            return true
        }else{
          confirmEmail.innerText= "E-mail invalid";
          confirmEmail.style.color= "red";
            return false    
        }}
      }
    
      function validateNum(){
        if(phoneNumber.value==""){
          confirmNumber.innerText= "This field cannot be left blank";
          confirmNumber.style.color= "red";
          return false
      }else{
          const phoneRegex= /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
          if(phoneRegex.test(phoneNumber.value)){
            confirmNumber.innerText= "Phone Number valid";
            confirmNumber.style.color= "green";
              return true
          }else{
            confirmNumber.innerText= "Invalid Number or Formatting (Enter numbers separated by . - split as 3|3|4 or without any spacing)";
            confirmNumber.style.color= "red";
              return false    
          }
      }    
  }

  const midPassRegex=/^(?=.*[a-zA-Z0-9]){8,}$/;
const strongPassRegex=/^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&*()_+=\[{\]};:'\",<.>/?~-]).{10,}$/

let passStrength= 0;
function getPassStrength(){
    passStrength=0;
    if(strongPassRegex.test(password.value)){
        passStrength+=2    
    }if(midPassRegex.test(password.value)){
        passStrength++
    }if(password.value.length==8){
        passStrength++
    }if(password.value.length>10){
        passStrength++
    }if(password.value.length==0){
        passStrength==0
    }
}

function validatePass(){
   getPassStrength();      
  if( password.value==""){
    passCheck .innerText= "This field cannot be left blank";
    passCheck .style.color= "red";
      passStrengthDisplay.classList.add('weakPassword');        
      return false;
  }else if(password.value.length<8){
    passCheck.innerText= "This password is too weak. At least 8 characters required.";
    passCheck.style.color= "red";
      passStrengthDisplay.classList.add('weakPassword');           
      return false;
  }else if(passStrength==0){
      passCheck.innerText= "This password is Weak. Use a mix of numbers, upper and lowercase letters";
      passCheck.style.color= "red";
      passStrengthDisplay.classList.add('weakPassword');           
      return false;
  }else if(passStrength==1){
      passCheck.innerText= "Medium password. Use numbers and special characters to make this stronger.";
      passCheck.style.color= "orange"
      passStrengthDisplay.classList.add('mediumPassword');     
      return true;
  }else if(passStrength==2){
      passCheck.innerText= "Strong password";
      passCheck.style.color= "green" 
      passStrengthDisplay.classList.add('strongPassword');          
      return true;
  }else if(passStrength>=3){
      passCheck.innerText= "Very strong password";
      passCheck.style.color= "green" 
      passStrengthDisplay.classList.add('veryStrongPassword');        
      return true;
  }else{
      passCheck.innerText= "Invalid password";
      passCheck.style.color= "red";
      passStrengthDisplay.classList.add('weakPassword');   
      return false
  }
}
function resetPassBar(){
  passStrength= 0
  passStrengthDisplay.classList.remove('weakPassword');  
  passStrengthDisplay.classList.remove('mediumPassword');  
  passStrengthDisplay.classList.remove('strongPassword');  
  passStrengthDisplay.classList.remove('veryStrongPassword');  
}
function confirmPass(){
  if(password.value==""&&passwordReentered.value==""){
      passCheck.innerText= "Passwords not entered";
      passCheck.style.color= "red";
      return false
  }else if(password.value==passwordReentered.value){
      passCheck.innerText= "Passwords are a match";
      passCheck.style.color= "green"
      return true
  }else{
      passCheck.innerText= "Passwords do not match";
      passCheck.style.color= "red";
      return false
  }
}
form.addEventListener('submit', function(e){
  e.preventDefault();
  var validMail=validateMail();
  var validNum=validateNum(); 
  var validPass=validatePass(); 
  var cPass=confirmPass();

  if(validMail===true&&validNum===true&&validPass===true&&cPass===true){
  form.submit();
  window.location.href= './success.html';
  }else{
      alert("Invalid Format");
      console.log("alert");
}
});
