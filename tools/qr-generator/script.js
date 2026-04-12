function generateQR() {

    let text = document.getElementById("text").value;
    let qrDiv = document.getElementById("qr");
    let downloadLink = document.getElementById("downloadQR");

    qrDiv.innerHTML = "";
    downloadLink.style.display = "none";

    if (!text) {
        qrDiv.innerText = "Enter text or URL ❗";
        return;
    }

    let qr = new QRCode(qrDiv, {
        text: text,
        width: 200,
        height: 200
    });

    // Download logic
    setTimeout(() => {
        let img = qrDiv.querySelector("img");

        if (img) {
            downloadLink.href = img.src;
            downloadLink.download = "qr-code.png";
            downloadLink.style.display = "block";
            downloadLink.innerText = "Download QR Code";
        }
    }, 500);
}
