document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const terms = document.getElementById('terms');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = form.querySelector('button[type="submit"]');

  const togglePassword = document.getElementById('togglePassword');
  const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

  if (togglePassword) {
    togglePassword.addEventListener('change', function () {
      password.type = this.checked ? 'text' : 'password';
    });
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('change', function () {
      confirmPassword.type = this.checked ? 'text' : 'password';
    });
  }

  function validateFullName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name.trim());
  }

  function validatePassword(pwd) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return pwd.length >= 8 && re.test(pwd);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    fullName.setCustomValidity('');
    email.setCustomValidity('');
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
    terms.setCustomValidity('');

    if (!validateFullName(fullName.value)) {
      fullName.setCustomValidity('Invalid full name');
    }

    if (!validatePassword(password.value)) {
      password.setCustomValidity('Password does not meet criteria');
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    }

    if (form.checkValidity()) {
      successMessage.classList.remove('d-none');
      form.classList.remove('was-validated');
      form.reset();

      submitBtn.disabled = true;
      setTimeout(() => {
        successMessage.classList.add('d-none');
        submitBtn.disabled = false;
      }, 3000);
    } else {
      successMessage.classList.add('d-none');
      form.classList.add('was-validated');
    }
  });
});
