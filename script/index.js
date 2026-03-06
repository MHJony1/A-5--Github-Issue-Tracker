function signIn() {
  const username = document.getElementById("username-container").value;
  const password = document.getElementById("password-container").value;
  if (username === "admin" && password === "admin123") {
    alert("Login successful");
    window.location.href = "./home.html";
  } else {
    alert("Invalid username or password");
  }
}

function fillUsername() {
        document.getElementById('username-container').value = "admin";
    }

    
  function fillPassword() {
        document.getElementById('password-container').value = "admin123";
   }