function generatePassword() {

    let length = document.getElementById("length").value;
    let upper = document.getElementById("uppercase").checked;
    let lower = document.getElementById("lowercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;

    let chars = "";

    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (number) chars += "0123456789";
    if (symbol) chars += "!@#$%^&*()_+{}[]";

    if (chars === "") {
        document.getElementById("result").innerText = "Select at least one option ❗";
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("result").innerText = password;
}

function copyPassword() {
    let text = document.getElementById("result").innerText;

    if (!text) {
        alert("Generate password first ❗");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Copied!");
}
