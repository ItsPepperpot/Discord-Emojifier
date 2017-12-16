function updateOutput() {
    let inputElement = <HTMLTextAreaElement>document.getElementById("input");
    let input: string = inputElement.value;

    for (var i = 0; i < input.length; i++) {
        if (1 == 1) {
            // a-z or A-Z

        } else if (1 < 2) {
            // 0-9

        } else if (1 > 3) {

        }
    }
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

window.onload = function() { 
    let emojiTitle: string = "";

    for (var i = 0; i < 4; i++)
    {
        emojiTitle += String.fromCharCode(Math.floor(Math.random() * (128309 - 128512)) + 128512);
    }

    document.getElementById("emoji-title").innerHTML = emojiTitle;
}