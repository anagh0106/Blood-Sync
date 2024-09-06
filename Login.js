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
function togglePasswordVisibility1() {
    const toggleIcon1 = document.getElementById("toggle-icon1");
    const passField1 = document.getElementById("passwordField1");

    if (passField1.type === 'password') {
        passField1.type = 'text';
        toggleIcon1.classList.remove('fa-eye');
        toggleIcon1.classList.add('fa-eye-slash');
    }
    else {
        passField1.type = 'password';
        toggleIcon1.classList.remove('fa-eye-slash');
        toggleIcon1.classList.add('fa-eye');
    }
    console.log("clicked")
}