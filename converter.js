function updateOutput() {
    let inputElement = document.getElementById("input");
    let outputElement = document.getElementById("output");
    let trimOutputElement = document.getElementById("trim-output");
    outputElement.readOnly = false;
    let input = inputElement.value;
    let output = "";
    let alphabet = new RegExp("[A-z]");
    let numbers = new RegExp("[0-9]");
    for (var i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        if (alphabet.test(c)) {
            output += ":regional_indicator_" + c.toString().toLowerCase() + ": ";
        }
        else if (numbers.test(c)) {
            switch (c) {
                case "1":
                    output += ":one: ";
                    break;
                case "2":
                    output += ":two: ";
                    break;
                case "3":
                    output += ":three: ";
                    break;
                case "4":
                    output += ":four: ";
                    break;
                case "5":
                    output += ":five: ";
                    break;
                case "6":
                    output += ":six: ";
                    break;
                case "7":
                    output += ":seven: ";
                    break;
                case "8":
                    output += ":eight: ";
                    break;
                case "9":
                    output += ":nine: ";
                    break;
                case "0":
                    output += ":zero: ";
                    break;
            }
        }
        else if (c == " ") {
            output += "   ";
        }
        else if (c == "*") {
            output += ":asterisk: ";
        }
        else if (c == "~") {
            output += ":wavy_dash: ";
        }
        else if (c == '-' || c == '–' || c == '—' || c == '−') {
            output += ":heavy_minus_sign: ";
        }
        else if (c == "+") {
            output += ":heavy_plus_sign: ";
        }
        else if (c == "#") {
            output += ":hash: ";
        }
        else if (c == "!") {
            output += ":exclamation: ";
        }
        else if (c == "?") {
            output += ":question: ";
        }
    }
    if (trimOutputElement.checked && output.length > 2000) {
        output = output.slice(0, 2000);
    }
    document.getElementById("output").innerHTML = output;
    outputElement.readOnly = true;
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
