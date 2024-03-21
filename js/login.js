document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Here you can add your login logic, like sending an AJAX request to the server to authenticate the user
  // For demonstration purposes, let's just log a message to the console
  
  console.log('Login button clicked!');
});
