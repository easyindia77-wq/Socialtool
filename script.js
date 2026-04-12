function compressImage() {

    let fileInput = document.getElementById("imageInput");
    let qualityInput = document.getElementById("quality");
    let result = document.getElementById("result");
    let downloadLink = document.getElementById("downloadLink");

    let file = fileInput.files[0];

    if (!file) {
        result.innerText = "Please select an image ❗";
        return;
    }

    let quality = parseFloat(qualityInput.value);

    if (isNaN(quality) || quality <= 0 || quality > 1) {
        result.innerText = "Enter valid quality between 0.1 and 1 ❗";
        return;
    }

    let reader = new FileReader();

    reader.onload = function (e) {
        let img = new Image();

        img.onload = function () {

            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            let compressedData = canvas.toDataURL("image/jpeg", quality);

            downloadLink.href = compressedData;
            downloadLink.download = "compressed.jpg";
            downloadLink.style.display = "block";
            downloadLink.innerText = "Download Compressed Image";

            let originalSize = (file.size / 1024).toFixed(2);
            let compressedSize = (compressedData.length * 0.75 / 1024).toFixed(2);

            result.innerText =
                "Original Size: " + originalSize + " KB | Compressed Size: " + compressedSize + " KB";
        };

        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}
