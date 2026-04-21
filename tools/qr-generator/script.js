async function createPDF() {

    const { jsPDF } = window.jspdf;

    let files = document.getElementById("images").files;
    let result = document.getElementById("result");
    let downloadLink = document.getElementById("downloadPDF");

    if (files.length === 0) {
        result.innerText = "Please select images ❗";
        return;
    }

    let pdf = new jsPDF();

    for (let i = 0; i < files.length; i++) {

        let file = files[i];

        let reader = new FileReader();

        let imgData = await new Promise((resolve) => {
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });

        let img = new Image();

        let imgLoad = await new Promise((resolve) => {
            img.onload = resolve;
            img.src = imgData;
        });

        let width = pdf.internal.pageSize.getWidth();
        let height = (img.height * width) / img.width;

        if (i > 0) pdf.addPage();

        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
    }

    let pdfBlob = pdf.output("blob");
    let url = URL.createObjectURL(pdfBlob);

    downloadLink.href = url;
    downloadLink.download = "converted.pdf";
    downloadLink.style.display = "block";
    downloadLink.innerText = "Download PDF";

    result.innerText = "PDF Created Successfully ✅";
                }
