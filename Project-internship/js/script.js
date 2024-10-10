function validateForm() {
    let firstName = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms["myForm"]["lastName"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let password = document.forms["myForm"]["password"].value;
  
    if (firstName == "") {
      alert("First Name must be filled out");
      return false;
    }
    if (lastName == "") {
      alert("Last Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (phone == "") {
      alert("Phone Number must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
  
    // Additional validation can be added here for email format, phone number format, etc.
  
    return true;
  }