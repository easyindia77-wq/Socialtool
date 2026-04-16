function generateQR() {

    const textInput = document.getElementById("text");
    const qrDiv = document.getElementById("qr");
    const downloadLink = document.getElementById("downloadQR");

    let text = textInput.value.trim();

    // Reset UI
    qrDiv.innerHTML = "";
    downloadLink.style.display = "none";

    // Validation
    if (!text) {
        qrDiv.innerHTML = "<p style='color:red;'>⚠ Please enter text or URL</p>";
        return;
    }

    // Auto URL Fix (important for real usage)
    if (
        text.startsWith("www.") ||
        (!text.startsWith("http://") && !text.startsWith("https://") && text.includes("."))
    ) {
        text = "https://" + text;
    }

    try {
        // Generate QR
        new QRCode(qrDiv, {
            text: text,
            width: 220,
            height: 220,
            correctLevel: QRCode.CorrectLevel.H // high quality
        });

        // Download Setup
        setTimeout(() => {

            let img = qrDiv.querySelector("img");
            let canvas = qrDiv.querySelector("canvas");

            if (img) {
                downloadLink.href = img.src;
            } 
            else if (canvas) {
                downloadLink.href = canvas.toDataURL("image/png");
            } 
            else {
                qrDiv.innerHTML = "<p style='color:red;'>❌ QR generation failed</p>";
                return;
            }

            downloadLink.download = "qr-code.png";
            downloadLink.innerText = "⬇ Download QR Code";
            downloadLink.style.display = "inline-block";

        }, 300);

    } catch (error) {
        qrDiv.innerHTML = "<p style='color:red;'>❌ Something went wrong</p>";
        console.error(error);
    }
                }
