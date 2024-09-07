document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simple validation
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (email && message) {
    alert('Thank you for your message!');
    // Add form submission logic here (e.g., sending data to a server)
  } else {
    alert('Please fill out both fields.');
  }
});
