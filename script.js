document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    function validateEmail(email) {
        // Improved regex for email validation
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    form.addEventListener('submit', function(e) {
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) {
            e.preventDefault();
            if (successMessage) successMessage.textContent = '';
        } else {
            e.preventDefault();
            if (successMessage) {
                successMessage.textContent = 'Your message has been sent successfully!';
            }
            form.reset();
        }
    });
});
