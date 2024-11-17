class MyCar {
    color = "red";
    year = 2022;
}

function classVsObject() {
    class MyCar {
        color = "red";
        year = 2022;
    }
    
    const myCar = {
        color: "red",
        year: 2022,
    };
    
    debugger;
    display(MyCar);
    display(myCar);
}

function newObject() {
    debugger;
    const myCar = new MyCar();
    const myCar2 = new MyCar();
    const myCar3 = new MyCar();

    myCar2.color = "white";
    myCar3.year = 2025;

    display(JSON.stringify(myCar));
    display(JSON.stringify(myCar2));
    display(JSON.stringify(myCar3));
}

// function classVsObject() {
//     class MyCar {
//         color= "red";
//         year= 2022;
//     }

//     const myCar2 = {
//         color: "red",
//         year: 2022,
//     }

//     const myCar3 = {
//         color: "red",
//         year: 2022,
//     }

//     debugger;
//     display(MyCar);
//     display(myCar);
// }


function display(message) {
    document.write(message);
}

function greeting() {
    debugger;
    display("Hello World!");
}

function myFunction(callbackFunction) {
    callbackFunction();
}

function activator() {
    debugger;
    myFunction(greeting);
}

function delayedGreeting() {
    setTimeout(greeting, 5000);
}
function asynchronous() {
    debugger;
    setTimeout(greeting, 5000);
    display("Waiting for the greeting to be displayed...");
}

function submitForm(event) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Form submitted with email: " + email + "...");
    setTimeout(serverResponse, 5000);
}

function serverResponse() {
    display("Form was submitted successfully!");
}

function displayObject() {
    const myCar = {
        color: "red",
        year: 2022,
    };

    const result = JSON.stringify(myCar);
    display(result);
}

function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Form submitted with email: " + email + "...");
    const promise = new Promise(getServerResponse);
    promise.then(parseResponse);
}

function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }

}

function parseResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(message);
}