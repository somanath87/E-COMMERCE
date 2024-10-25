function login() {
    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
      // Show the success message
      document.getElementById('successMessage').classList.remove('hidden');
      return false; // Prevent form submission
    }
  
    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  
    return false; // Prevent form submission
  }
  