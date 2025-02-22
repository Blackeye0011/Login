function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Hardcoded login credentials
    if (username === "admin" && password === "password") {
        localStorage.setItem("loggedIn", "true"); // Store login status
        window.location.href = "welcome.html"; // Redirect to welcome page
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
}

// Check if user is authenticated (for welcome page)
function checkAuth() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html"; // Redirect back to login page
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html"; // Redirect to login page
}

// Run checkAuth() when on the welcome page
if (window.location.pathname.includes("welcome.html")) {
    checkAuth();
}
