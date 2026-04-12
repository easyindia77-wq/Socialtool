function calculateEMI() {

    let principal = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let months = parseInt(document.getElementById("months").value);

    let result = document.getElementById("result");

    if (isNaN(principal) || principal <= 0 ||
        isNaN(rate) || rate <= 0 ||
        isNaN(months) || months <= 0) {

        result.innerText = "Please enter valid values ❗";
        return;
    }

    let monthlyRate = rate / 12 / 100;

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment = emi * months;
    let totalInterest = totalPayment - principal;

    result.innerText =
        "Monthly EMI: ₹" + emi.toFixed(2) +
        " | Total Interest: ₹" + totalInterest.toFixed(2) +
        " | Total Payment: ₹" + totalPayment.toFixed(2);
}
