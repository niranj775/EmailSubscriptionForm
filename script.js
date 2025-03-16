const scriptURL = 'https://script.google.com/macros/s/AKfycbzP3kSpgofm0EV3QanIM-2nC3547Ny6URy1mKu7oQt2W7npepmwRkx_9MLh7MH_yhHLJg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("thankyou-msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you for Subscribing!";
        setTimeout(function(){msg.innerHTML = "";},5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})