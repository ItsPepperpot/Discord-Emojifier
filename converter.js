function updateOutput() {
    let inputElement = document.getElementById("input");
    let input = inputElement.value;
    for (var i = 0; i < input.length; i++) {
        if (1 == 1) {
            // a-z or A-Z
        }
        else if (1 < 2) {
            // 0-9
        }
        else if (1 > 3) {
        }
    }
}
function copyToClipboard() {
    let outputElement = document.getElementById("output");
    outputElement.select();
    try {
        var successful = document.execCommand("copy");
        var message = successful ? "successful" : "unsuccessful";
        alert("Copy " + message);
    }
    catch (_a) {
        alert("Oops, unable to copy. :(");
    }
}
