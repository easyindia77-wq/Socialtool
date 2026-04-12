function translateText() {

    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("lang").value;
    let result = document.getElementById("result");

    if (!text) {
        result.innerText = "Enter text first ❗";
        return;
    }

    let url = "https://translate.google.com/?sl=auto&tl=" + lang + "&text=" + encodeURIComponent(text) + "&op=translate";

    result.innerHTML = `
    <p>Click below to view translation:</p>
    <a href="${url}" target="_blank">Translate Now</a>
    `;
}

function copyText() {
    let result = document.getElementById("result").innerText;
    navigator.clipboard.writeText(result);
    alert("Copied!");
}
