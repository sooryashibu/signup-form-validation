document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const terms = document.getElementById('terms');
  const successMessage = document.getElementById('successMessage');

  // Helper function to validate full name (only letters and spaces)
  function validateFullName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name.trim());
  }

  // Helper function to validate password: min 8 chars, at least one number and one special char
  function validatePassword(pwd) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return pwd.length >= 8 && re.test(pwd);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Reset custom validity messages
    fullName.setCustomValidity('');
    email.setCustomValidity('');
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
    terms.setCustomValidity('');

    // Validate full name
    if (!validateFullName(fullName.value)) {
      fullName.setCustomValidity('Invalid full name');
    }

    // Validate password
    if (!validatePassword(password.value)) {
      password.setCustomValidity('Password does not meet criteria');
    }

    // Validate confirm password matches password
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    }

    // Check if form is valid
    if (form.checkValidity()) {
      // Hide form and show success message
      successMessage.classList.remove('d-none');
      form.classList.remove('was-validated');
      form.reset();
    } else {
      successMessage.classList.add('d-none');
      form.classList.add('was-validated');
    }
  });
});
