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
    const nameInput = form[0];
    const phoneInput = form[1];
    const dateInput = form[2];
    const timeInput = form[3];
    const name = nameInput.value;
    const phone = phoneInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    const datetime = `${date} at ${time}`;
    output(`Thank you ${name} for scheduling a reservation! Phone call scheduled for ${datetime} at ${phone}.<br>`);
}