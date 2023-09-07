// Function to validate the form
function validate() {
    // Get form input values
    const firstName = document.getElementById("name").value;
    const secondName = document.getElementById("name").value;
    const lastName = document.getElementById("name2").value;
    const state = document.getElementById("State").value;
    const city = document.getElementById("City").value;
    const phoneNumber = document.getElementById("phn").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordReentered = document.getElementById("pwdre").value;
  
    // Regular expression for phone number validation
    const phoneNumberRegex = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    //  Check if any field is empty
    if (firstName === '' && secondName===''&& lastName === ''&& state==='' && city===''&& phoneNumber===''&& email === ''  && password === '' && passwordReentered === '') {
        alert('All fields must be filled out');
        return false;
    }
  
    // Check email format
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check phone number format
    if (!phoneNumberRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    // Check password strength
  //  const  passwordStrength = zxcvbn(password).score;
  //   const strengthIndicator = document.getElementById("password-strength");
  
  //   if (passwordStrength < 2) {
  //     strengthIndicator.style.backgroundColor = "red";
  //     strengthIndicator.textContent = "Weak";
  //   } else if (passwordStrength < 3) {
  //     strengthIndicator.style.backgroundColor = "orange";
  //     strengthIndicator.textContent = "Medium";
  //   } else {
  //     strengthIndicator.style.backgroundColor = "green";
  //     strengthIndicator.textContent = "Strong";
  //   }
  
    // Check password match
    if (password !== passwordReentered) {
      alert("Passwords do not match.");
      return false;
    }
  
    // If all validations pass, submit the form
    // alert("Form submitted successfully!");
    return true;
  }
  function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const passwordStrength = document.getElementById("password-strength");
    const progressBar = passwordStrength.querySelector(".progress-bar");

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
    progressBar.style.width = (strength / 4) * 100 + "%";

    // Apply color classes based on the score
    if (strength === 0) {
        progressBar.className = "progress-bar bg-danger";
    } else if (strength === 1) {
        progressBar.className = "progress-bar bg-warning";
    } else if (strength >= 2) {
        progressBar.className = "progress-bar bg-success";
    }
}
