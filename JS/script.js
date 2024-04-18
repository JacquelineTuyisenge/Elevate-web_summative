import {EMAIL_HOST} from "../env.js";
import {EMAIL_USERNAME} from "../env.js";
import {EMAIL_PASSWORD} from "../env.js";
import {EMAIL_TO} from "../env.js";
import {EMAIL_FROM} from "../env.js";


$(document).ready(function () {

// check if user is logged In

if (localStorage.getItem('loggedIn')) {
  updateNavbar();
}

//updateNavBar function

function updateNavbar() {
  var loggedInUser = localStorage.getItem('userEmail');
  var initials = loggedInUser.split("@")[0].slice(0, 2).toLocaleUpperCase();

  $("#sign-link").text(initials).addClass("bg-success text-white").css({
    "padding": "5px 10px",
    "cursor": "pointer"
}).removeAttr("href").click(function () {
    //show logout option

    var logoutOption = $("<a href='#' class='nav-link'>Logout</a>");
    logoutOption.click(function () {
      localStorage.removeItem('loggedIn'); // remove logged in flag
      $(this).remove(); // remove logout option
      $("#sign-link").text("Sign In").removeClass("bg-success").css("padding", "");
      $("#sign-link").attr("href", "sign.html"); // Reset href to sign-in page
    });
    $(this).after(logoutOption);
  });
}

// get initials

// function getInitials(email) {
//   var parts = email.split("@")[0];
//   var initials = parts.cha
//   return initials;
// }


// navigate to event.html

  $("#see-more").click(function () {
    window.location.href = "event.html";
  });

  $("#getInTouch").submit(function (event) {
    event.preventDefault();
    // Send email
    var email = $("#inputEmail4").val();
    var message = $("#message").val();
    var messageBody = `<h3> Email: ${email}<h3> 
        <h4> has sent you the following message:<h4>
        <h4> ${message} </h4>`;

    Email.send({
      Host: EMAIL_HOST,
      Username: EMAIL_USERNAME,
      Password: EMAIL_PASSWORD,
      To: EMAIL_TO,
      From: EMAIL_FROM,
      Subject: "New Message Inquiry to Food Share!",
      Body: messageBody,
    }).then(
      // message => alert(message);
      console.log("*********************************", message)
    );

    $(".error-message").text(""); // clear error messages

    //validate email
    if (email.trim() === "") {
      $("#emailError").text("Please enter your email");
      return;
    }

    if (message.trim() === "" || message.length < 5) {
      $("#messageError").text(
        "Please enter your message, at least 5 characters long"
      );
      return;
    }

    // Display success message in modal
    $("#modalText").text("Form submitted successfully");
    $("#myModal").css("display", "block");
  });

  $(".close").click(function () {
    $("#myModal").css("display", "none");
    $("#inputEmail4, #message").val(""); // Clear the input values
  });

  // Close the modal popup when the user clicks anywhere outside of it
  $(window).click(function (event) {
    if (event.target == $("#myModal")[0]) {
      $("#myModal").css("display", "none");
    }
  });

  $("#myModal").on("hidden.bs.modal", function () {
    $("#getInTouch")[0].reset(); // Reset the form fields
  });
});
