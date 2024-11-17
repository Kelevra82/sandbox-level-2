function handleClick(event) {
    debugger;
    const promise = fetch("https://opentdb.com/api.php?amount=1");
    promise.then(parseResponse);
}

function parseResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text;
    promise.then(viewResponse);
}

function viewResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
}