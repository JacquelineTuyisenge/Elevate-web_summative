// Function to check if the user has accepted cookies
function hasAcceptedCookies() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

// Function to show the cookie consent popup
function showCookieConsentPopup() {
  if (!hasAcceptedCookies()) {
    document.getElementById('cookieConsentPopup').style.display = 'block';
  }
}

// Function to hide the cookie consent popup and save user's consent
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieConsentPopup').style.display = 'none';
}

// Event listener for accept cookies button
document.getElementById('acceptCookiesBtn').addEventListener('click', function() {
  acceptCookies();
  // Add any additional functionality you want to execute after accepting cookies here
});

// Show the cookie consent popup when the page loads
window.addEventListener('load', showCookieConsentPopup);
