// login.js

// Function to validate the form
function validateForm() {
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('password');
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Check if all fields are filled
    if (emailInput.value === '' || passwordInput.value === '') {
      alert('All fields must be filled out.');
      return false;
    }
  
    // Validate email using a regular expression
    
    if (!emailPattern.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password strength
    const passwordStrength = updatePasswordStrengthBar(passwordInput.value);
  
    if (passwordStrength < 20) {
      updatePasswordStrengthBar('red');
    } else if (passwordStrength < 40) {
      updatePasswordStrengthBar('yellow');
    } else {
      updatePasswordStrengthBar('green');
    }
  
    // Check if password meets the requirements
    if (passwordStrength < 40) {
      alert('Password should contain a capital letter, a small letter, a number, and be at least 8 characters long.');
      return false;
    }
  
    return true;
  }
  
  // Function to calculate password strength
  function calculatePasswordStrength(password) {
    // You can implement your own logic for password strength calculation here
    // For simplicity, we will just check if it contains at least one uppercase letter,
    // one lowercase letter, one digit, and is at least 8 characters long.
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;
  
    const strength = (hasUppercase + hasLowercase + hasDigit + isLengthValid) * 25;
    return strength;
  }
  
//   Function to update the password strength progress bar color
  function updatePasswordStrengthBar(color) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
  }
  
  // Function to change password strength and update the progress bar
//   function changePasswordStrength() {
//     const passwordInput = document.getElementById('password');
//     const passwordStrength = calculatePasswordStrength(passwordInput.value);
//     const progressBar = document.querySelector('.progress-bar');
//     progressBar.style.width = `${passwordStrength}%`;
//   }

// Calculate password strength score (0 to 4)
let strength = 0;

if (password.length >= 8) {
    strength += 1;
}

if (/[A-Z]/.test(password)) {
    strength += 1;
}
if (/[a-z]/.test(password)) {
    strength += 1;
}

if (/\d/.test(password)) {
    strength += 1;
}
  
// Function to update the password strength progress bar color
function updatePasswordStrengthBar(color) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-success');
  
    if (color === 'red') {
      progressBar.classList.add('bg-danger');
    } else if (color === 'yellow') {
      progressBar.classList.add('bg-warning');
    } else {
      progressBar.classList.add('bg-success');
    }
  }
  
