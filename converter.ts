function updateOutput() {
    let inputElement = <HTMLTextAreaElement>document.getElementById("input");
    let outputElement = <HTMLTextAreaElement>document.getElementById("output");
    let trimOutputElement = <HTMLInputElement>document.getElementById("trim-output");
    outputElement.readOnly = false;
    let input: string = inputElement.value;
    let output: string = "";

    let alphabet = new RegExp("[A-z]");
    let numbers = new RegExp("[0-9]");

    for (var i = 0; i < input.length; i++) {
        let c = input.charAt(i);

        if (alphabet.test(c)) {
            output += ":regional_indicator_" + c.toString().toLowerCase() + ": ";
        } else if (numbers.test(c)) {
            switch(c) {
                case "1": output += ":one: "; break;
                case "2": output += ":two: "; break;
                case "3": output += ":three: "; break;
                case "4": output += ":four: "; break;
                case "5": output += ":five: "; break;
                case "6": output += ":six: "; break;
                case "7": output += ":seven: "; break;
                case "8": output += ":eight: "; break;
                case "9": output += ":nine: "; break;
                case "0": output += ":zero: "; break;
            }
        } else if (c == " ") { // Space
            output += "   ";
        } else if (c == "*") { // Asterisk
            output += ":asterisk: ";
        } else if (c == "~") { // Tilde
            output += ":wavy_dash: ";
        } else if (c == '-' || c == '–' || c == '—' || c == '−') {  // Hypen/En dash/Em dash/Minus sign
            output += ":heavy_minus_sign: ";
        } else if (c == "+") { // Plus sign
            output += ":heavy_plus_sign: ";
        } else if (c == "#") { // Hash
            output += ":hash: ";
        } else if (c == "!") { // Exclamation mark
            output += ":exclamation: ";
        } else if (c == "?") { // Question mark
            output += ":question: ";
        }
    }
    if (trimOutputElement.checked && output.length > 2000)
    {
        output = output.slice(0, 2000);
    }
    document.getElementById("output").innerHTML = output;
    outputElement.readOnly = true;
}

function copyToClipboard() {
    let outputElement = <HTMLTextAreaElement>document.getElementById("output");
    outputElement.select();

    try {
        var successful = document.execCommand("copy");
        var message = successful ? "successful" : "unsuccessful";
        alert("Copy " + message);
    } catch {
        alert("Oops, unable to copy. :(");
    }
}