function calculateAge() {

    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (!dob) {
        result.innerText = "Please select your date of birth ❗";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if negative
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText =
        "Your Age is: " +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}
