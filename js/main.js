/******contact form validation******/
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
function validateForm() {
  var fields = ["name", "country", "phone", "email", "message"];
  var isValid = true;

  for (var i = 0; i < fields.length; i++) {
    var fieldValue = document.getElementById(fields[i]).value;
    if (fieldValue === "") {
      alert("Please fill in all the fields");
      isValid = false;
      highlightField(fields[i]); // Highlight the empty field
      break; // Exit loop if any field is empty.
    } else {
      resetFieldHighlight(fields[i]); // Reset the field highlight if it's not empty
    };
  };

  if (isValid) {
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Validation of Phone number using regular expression
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid mobile number");
      isValid = false;
      highlightField("phone"); // Highlight the phone field
    } else {
      resetFieldHighlight("phone"); // Reset the phone field highlight
    };
  };

  if (isValid) {
    // Validation of Email address using regular expression
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      isValid = false;
      highlightField("email"); // Highlight the email field
    } else {
      resetFieldHighlight("email"); // Reset the email field highlight
    };
  };

  if (isValid) {
    // When the form is being submitted successfully, this message will pop up.
    var thankYouMessage = "Form Submitted Successfully!";
    alert(thankYouMessage);
    return true; // Allow the form to be submitted successfully.
  } else {
    return false; // Prevent form submission if validation checks fail.
  };
};

function updateCountryCode() {
  var countrySelect = document.getElementById('country');
  var countryCodeSpan = document.getElementById('countryCode');
  var selectedCountry = countrySelect.value;
  // Country code mapping
  var countryCodes = {
    'US': '+1',
    'CA': '+1',
    'UK': '+44',
    'NP': '+977',
    'IN': '+91',
    'JP': '+81',
    'KR': '+82',
    'PT': '+351'
  };
  countryCodeSpan.textContent = countryCodes[selectedCountry];
};
// reset function
function resetForm() {
  var fields = ["name", "country", "phone", "email", "message"];

  for (var i = 0; i < fields.length; i++) {
    resetFieldHighlight(fields[i]); // Reset field highlights
    document.getElementById(fields[i]).value = ''; // Clear field values
  };
};
//highlighting error field when required value is false
function highlightField(fieldId) {
  var field = document.getElementById(fieldId);
  field.style.backgroundColor = 'lightgrey';

  // Check if the field already has the exclamation mark
  var exclamationMark = field.parentNode.querySelector('.exclamation-mark');
  if (!exclamationMark) {
    // Create a new span element for the exclamation mark
    exclamationMark = document.createElement('span');
    exclamationMark.className = 'exclamation-mark';
    exclamationMark.innerHTML = '!';

    // Append the exclamation mark element to the field
    field.parentNode.appendChild(exclamationMark);
  };

  // Add the error class to the field
  field.classList.add('error-field');
};
//reset the highlighted field when require value is true
function resetFieldHighlight(fieldId) {
  var field = document.getElementById(fieldId);
  field.style.backgroundColor = '';

  // Remove the exclamation mark element if it exists
  var exclamationMark = field.parentNode.querySelector('.exclamation-mark');
  if (exclamationMark) {
    exclamationMark.parentNode.removeChild(exclamationMark);
  };

  // Remove the error class from the field
  field.classList.remove('error-field');

};

