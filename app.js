// Define a function to save the user data to local storage
function saveData(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  // Define a function to retrieve the user data from local storage
  function getData() {
    var users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
      users = [];
      saveData(users);
    }
    return users;
  }
  
  // Define a function to handle the sign-up process
  function signup() {
    var newUsername = document.getElementById("newusername").value;
    var newPassword = document.getElementById("newpassword").value;
    var users = getData();
    
    // Check if the username already exists
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == newUsername) {
        alert("Username already exists. Please choose a different one.");
        return;
      }
    }
    
    // Add the new user to the array and save to local storage
    users.push({username: newUsername, password: newPassword});
    saveData(users);
    alert("Sign up successful. Please log in.");
    document.getElementById("newusername").value = "";
    document.getElementById("newpassword").value = "";
  }
  
  // Define a function to handle the login process
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var users = getData();
    
    // Check if the username and password match a user in the array
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          return window.location.href="index.html";
      }
    }
    
    alert("Incorrect username or password. Please try again.");
  }