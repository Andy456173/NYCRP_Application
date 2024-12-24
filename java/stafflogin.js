document.getElementById('loginForm').addEventListener ('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a login check (replace with actual authentication logic)
    if (username === 'Management' && password === '2025ManagementNYCRP') {
        alert('Login successful!'); // Redirect to staff dashboard or another page
        window.location.href = 'checking.html'; // Example redirect
    } else {
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = 'Invalid username or password. Please try again.';
        loginMessage.classList.add('fade-in'); // Add animation class
    }
});

// CSS for the error message animation
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);