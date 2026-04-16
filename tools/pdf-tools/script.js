async function createPDF() {

    const { jsPDF } = window.jspdf;

    const files = document.getElementById("images").files;
    const result = document.getElementById("result");
    const downloadLink = document.getElementById("downloadPDF");

    // Reset
    result.innerText = "";
    downloadLink.style.display = "none";

    // Check files
    if (!files || files.length === 0) {
        result.innerText = "❗ Please select images";
        return;
    }

    // Create PDF (A4)
    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < files.length; i++) {

        const file = files[i];

        // Validate image
        if (!file.type.startsWith("image/")) {
            result.innerText = "❌ Only image files allowed";
            return;
        }

        // Convert to base64
        const imgData = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        // Load image
        const img = await new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = imgData;
        });

        // Page size
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Maintain ratio
        let imgWidth = pageWidth;
        let imgHeight = (img.height * imgWidth) / img.width;

        if (imgHeight > pageHeight) {
            imgHeight = pageHeight;
            imgWidth = (img.width * imgHeight) / img.height;
        }

        // Center image
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        if (i > 0) pdf.addPage();

        const format = file.type.includes("png") ? "PNG" : "JPEG";

        pdf.addImage(imgData, format, x, y, imgWidth, imgHeight);
    }

    // Create download
    const pdfBlob = pdf.output("blob");
    const url = URL.createObjectURL(pdfBlob);

    downloadLink.href = url;
    downloadLink.download = "image-to-pdf.pdf";
    downloadLink.style.display = "inline-block";
    downloadLink.innerText = "⬇️ Download PDF";

    result.innerText = "✅ PDF created successfully";

    // Cleanup memory
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 10000);
            }
