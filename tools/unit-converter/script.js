const units = {
    length: {
        base: "meter",
        values: {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            mile: 1609.34,
            foot: 0.3048,
            inch: 0.0254
        }
    },
    weight: {
        base: "gram",
        values: {
            gram: 1,
            kilogram: 1000,
            milligram: 0.001,
            pound: 453.592,
            ounce: 28.3495
        }
    },
    temperature: {
        special: true
    },
    speed: {
        base: "mps",
        values: {
            mps: 1,
            kmph: 0.277778,
            mph: 0.44704
        }
    },
    area: {
        base: "sqm",
        values: {
            sqm: 1,
            sqft: 0.092903,
            acre: 4046.86,
            hectare: 10000
        }
    },
    volume: {
        base: "liter",
        values: {
            liter: 1,
            ml: 0.001,
            cubicmeter: 1000
        }
    }
};

// 🔄 Update dropdown
function updateUnits() {
    let type = document.getElementById("type").value;
    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");

    from.innerHTML = "";
    to.innerHTML = "";

    if (units[type].special) {
        let tempUnits = ["celsius", "fahrenheit", "kelvin"];
        tempUnits.forEach(unit => {
            from.add(new Option(unit, unit));
            to.add(new Option(unit, unit));
        });
    } else {
        Object.keys(units[type].values).forEach(unit => {
            from.add(new Option(unit, unit));
            to.add(new Option(unit, unit));
        });
    }
}

// 🔥 Convert function
function convertUnit() {
    let value = parseFloat(document.getElementById("value").value);
    let type = document.getElementById("type").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    if (isNaN(value)) {
        result.innerText = "Enter valid value ❗";
        return;
    }

    let output;

    // 🌡️ Temperature special logic
    if (type === "temperature") {

        // convert to celsius
        let celsius;
        if (from === "celsius") celsius = value;
        else if (from === "fahrenheit") celsius = (value - 32) * 5/9;
        else if (from === "kelvin") celsius = value - 273.15;

        // convert from celsius
        if (to === "celsius") output = celsius;
        else if (to === "fahrenheit") output = (celsius * 9/5) + 32;
        else if (to === "kelvin") output = celsius + 273.15;

    } else {
        // 🔥 Universal conversion (base unit method)
        let base = value * units[type].values[from]; // convert to base
        output = base / units[type].values[to];      // convert to target
    }

    result.innerText = "Result: " + output.toFixed(4);
}

// 🚀 Auto init
updateUnits();
