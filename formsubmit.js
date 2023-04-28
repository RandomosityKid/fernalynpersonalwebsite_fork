// Form submission
const scriptURL =
  'https://script.google.com/macros/s/AKfycbxEGiuDBj0U7hSYqJJa7lAnMmdB5S6_6FHQTF9eMnszuCHPz59AtGX2ONLaSzLYrigd/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  // Send form data to Google Sheets
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      // Display success message
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function() {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});