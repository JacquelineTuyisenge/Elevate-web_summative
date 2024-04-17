document.addEventListener("DOMContentLoaded", function () {
  const cookieConsentPopup = document.getElementById("cookieConsentPopup");
  const acceptCookiesBtn = document.getElementById("acceptCookiesBtn");

  // Function to check if cookies are accepted
  function areCookiesAccepted() {
    return localStorage.getItem("cookiesAccepted") === "true";
  }

  // Function to show the cookie consent popup
  function showCookieConsentPopup() {
    if (!areCookiesAccepted()) {
      cookieConsentPopup.style.display = "block";
    }
  }

  // Function to accept cookies and hide the popup
  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    cookieConsentPopup.style.display = "none";
  }

  // Event listener for accepting cookies
  acceptCookiesBtn.addEventListener("click", acceptCookies);

  // Show the cookie consent popup on page load
  showCookieConsentPopup();
});
