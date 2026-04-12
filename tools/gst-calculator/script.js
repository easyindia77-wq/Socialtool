function calculateGST() {

    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("gstRate").value);
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        result.innerText = "Enter valid amount ❗";
        return;
    }

    if (isNaN(rate) || rate <= 0) {
        result.innerText = "Enter valid GST % ❗";
        return;
    }

    let gstAmount, total, original;

    if (type === "add") {

        gstAmount = (amount * rate) / 100;
        total = amount + gstAmount;

        result.innerText =
            "Original: ₹" + amount.toFixed(2) +
            " | GST (" + rate + "%): ₹" + gstAmount.toFixed(2) +
            " | Total: ₹" + total.toFixed(2);

    } else {

        original = amount / (1 + rate / 100);
        gstAmount = amount - original;

        result.innerText =
            "Total: ₹" + amount.toFixed(2) +
            " | GST (" + rate + "%): ₹" + gstAmount.toFixed(2) +
            " | Original: ₹" + original.toFixed(2);
    }
}
