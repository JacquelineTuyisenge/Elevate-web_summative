// Function to show the cookie consent popup
function showCookiePopup() {
  var cookiePopup = document.getElementById('cookieConsentPopup');
  cookiePopup.style.display = 'block';

  // Add event listener to the accept button
  document.getElementById('acceptCookiesBtn').addEventListener('click', function() {
    // Hide the cookie popup when accept button is clicked
    cookiePopup.style.display = 'none';
  });
}

// Call the function to show the popup when the page loads
window.onload = function() {
  showCookiePopup();
};
