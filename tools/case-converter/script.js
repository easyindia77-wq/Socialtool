function getText() {
    return document.getElementById("text").value;
}

function setResult(text) {
    document.getElementById("result").innerText = text;
}

function toUpper() {
    let text = getText();
    if (!text) {
        setResult("Enter text first ❗");
        return;
    }
    setResult(text.toUpperCase());
}

function toLower() {
    let text = getText();
    if (!text) {
        setResult("Enter text first ❗");
        return;
    }
    setResult(text.toLowerCase());
}

function toCapitalize() {
    let text = getText();
    if (!text) {
        setResult("Enter text first ❗");
        return;
    }

    let capitalized = text.toLowerCase().split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    setResult(capitalized);
}

function copyText() {
    let text = document.getElementById("result").innerText;

    if (!text) {
        alert("Nothing to copy ❗");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
        }
