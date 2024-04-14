import {EMAIL_HOST} from "../env.js";
import {EMAIL_USERNAME} from "../env.js";
import {EMAIL_PASSWORD} from "../env.js";
import {EMAIL_TO} from "../env.js";
import {EMAIL_FROM} from "../env.js";


$(document).ready(function () {
  console.log(
    "5555555555555555555566666666666666666666666",
    EMAIL_HOST
  );
  $("#getInTouch").submit(function (event) {
    event.preventDefault();
    // Send email
    var email = $("#inputEmail4").val();
    var message = $("#message").val();
    var messageBody = `<h3> Email: ${email}<h3> 
        <h4> has sent you the following message:<h4>
        <h4> ${message} </h4>`;
    console.log(
      "77777777777777777777777777777777777777777777777777",
      EMAIL_HOST
    );

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
