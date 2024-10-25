function myProcessForm(event) {
    event.preventDefault(); //Prevents the page from refreshing after submitting a form.
    const form = event.target;
    const passwordInput = form[0];
    const firstnameInput = form[1];
    const lastnameInput = form[2];
    const firstname = firstnameInput.value;
    output(`Your password is ${firstname}.<br>`);
}

function scheduleCall(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const datetimeInput = form[0];
    const phoneInput = form[1];
    const datetime = datetimeInput.value;
    const phone = phoneInput.value;
    output(`Phone call scheduled for ${datetime} at ${phone}.<br>`);
}