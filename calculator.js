function appendToOutput(value) {
    document.getElementById("output").value += value
};

function clearOutput() {
    document.getElementById("output").value = "";
};

function deleteOneFromOutput() {
    const inputString = document.getElementById("output").value;
    const deleteNumber = inputString.substring(0, inputString.length - 1);
    document.getElementById("output").value = deleteNumber;
};

function calculation() {
    try {
        const result = eval(document.getElementById("output").value);

        document.getElementById("output").value = result;
    } catch (error) {
        document.getElementById("output").value = "Syntax Error";
    }


};


function changeName() {
    const newNameInput = document.getElementById("newName");
    const oldName = document.getElementById("currentCalculatorName");

    if (newNameInput === "") {
        alert("input a valid name");
    } else {
        let display = confirm("Set new name to " + newNameInput.value + "?");

        if (display === true) {
            oldName.innerHTML = `${newNameInput.value}'s Calculator`;
        }
    }
    let CurrentFirstLetterValue = document.getElementById("CurrentFirstLetterValue");
    const newFirstLetterValue = document.getElementById("newName").value[0].toUpperCase()
    CurrentFirstLetterValue.value = `${newFirstLetterValue}C`;

}


// digitalClock 

function digitalClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let clockMinutes = document.querySelector('.minutes');
    let clockHours = document.querySelector('.hours');
    let clockSeconds = document.querySelector(".seconds")


    if (clockHours.textContent < 9) {
        clockHours.textContent = `0${hours}`;
    } else {
        clockHours.textContent = `${hours}:`
    }

    if (clockMinutes.innerHTML < 9) {
        clockMinutes.innerHTML = `0${minutes}`;
    } else {
        clockMinutes.innerHTML = `${minutes}:`
    }

    if (clockSeconds.innerHTML < 9) {
        clockSeconds.innerHTML = `0${seconds}`
    } else {
        clockSeconds.innerHTML = `${seconds}`
    }
}

setInterval(digitalClock, 1000)