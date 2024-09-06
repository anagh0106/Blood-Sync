function togglePasswordVisibility() {
    const toggleIcon = document.getElementById("toggle-icon");
    const passField = document.getElementById("passwordField");

    if (passField.type === 'password') {
        passField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
    else {
        passField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
    console.log("clicked")
}