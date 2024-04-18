$(document).ready(function () {

  $("#signup-form").hide();

  // Show sign-up form when clicking the sign-up link
  $("#show-signup").click(function () {
    $("#signin-form").hide();
    $("#signup-form").show();
  });

  // Show sign-in form when clicking the sign-in link
  $("#show-signin").click(function () {
    $("#signup-form").hide();
    $("#signin-form").show();
  });


  // sign-up submission

  $("#signup-form").submit(function (event) {
    event.preventDefault();
    // Send email
    var name = $("#signup-name").val();
    var email = $("#signup-email").val();
    var passrd = $("#signup-password").val();

    $(".error-message").text(""); // clear error messages

    //validate email and name

    if (name === "" || email === "" || passrd === "") {
      $("#nameError").text("Please enter your Name, valid email and password(atleast 5 characters long)");
      console.log("empty name");
      return;
    } else {
      
      // store user information in localstorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", passrd);

    // Display success message in modal
    $("#modalText").text("signing up is successfull!, sign In to continue");
    $("#myModal").css("display", "block");
    
  $(".close").click(function () {
    $("#myModal").css("display", "none");
    $("#signup-name, #signup-email, #signup-password").val(""); // Clear the input values
  });

  // Close the modal popup when the user clicks anywhere outside of it
  $(window).click(function (event) {
    if (event.target == $("#myModal")[0]) {
      $("#myModal").css("display", "none");
    }
  });

  $("#myModal").on("hidden.bs.modal", function () {
    $("#signup-form")[0].reset(); // Reset the form fields
  });
    }

  });


  $("#signin-form").submit(function (event) {
    event.preventDefault();
    // Send email
    var name = $("#signin-name").val();
    var email = $("#signin-email").val();
    var passrd = $("#signin-password").val();
  
    console.log("name: ",name, email, passrd);
  
    $(".error-message").text(""); // clear error messages
  
    //validate email and name
  
    if (name === "") {
      $("#nameError").text("Please enter your Name");
      console.log("empty name");
      return;
    }
  
    if (email === "") {
      $("#emailError").text("Please enter your email");
      return;
    }
  
    if (passrd === "") {
      $("#passError").text(
        "Please enter your password, at least 5 characters long"
      );
      return;
    }

    
    // Retrieve stored credentials from local storage
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    //validate input

    if (email === storedEmail && passrd === storedPassword){
      localStorage.setItem('loggedIn', true);

      // Display success message in modal
      $("#modalText").text("signed In successfully");
      $("#myModal").css("display", "block");

      
    } else {
      alert("Invalid email or password.");
    }
    
  });
  
  $(".close").click(function () {
    $("#myModal").css("display", "none");
    $("#signin-name, #signin-email, #signin-password").val(""); // Clear the input values
    window.location.href = "index.html";
  });
  
  // Close the modal popup when the user clicks anywhere outside of it
  
  $(window).click(function (event) {
    if (event.target == $("#myModal")[0]) {
      $("#myModal").css("display", "none");
    }
  });
  
  $("#myModal").on("hidden.bs.modal", function () {
    $("#signin-form")[0].reset(); // Reset the form fields
  });
});

