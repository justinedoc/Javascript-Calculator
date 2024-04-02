
function appendToOutput(value) {
    document.getElementById("output").value += value
};

function clearOutput() {
    document.getElementById("output").value = "";
    document.getElementById("calculated").value = "";
};

function deleteOneFromOutput() {
    const inputString = document.getElementById("output").value;
    const deleteNumber = inputString.substring(0, inputString.length - 1);
    document.getElementById("output").value = deleteNumber;
};

function calculation() {
    try {
        const result = eval(document.getElementById("output").value);

        document.getElementById("calculated").value = result;
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
        const display = confirm("Set new name to " + newNameInput.value + "?");

        if (display === true) {
            oldName.textContent = `${newNameInput.value}'s Calculator`;
            console.log("user picked yes")
        }

        // localStorage.setItem("name", display ? "true" : "false");
        // console.log("name is:", display ? "on" : "off");
    }

    // document.addEventListener("DOMContentLoaded", () => {
    //    const savedName = localStorage.getItem("name");

    //    if(savedName === "true") {
    //     alert("true");
    //     oldName.textContent = `${newNameInput.value}'s Calculator`;
    //    } else {
    //     oldName.textContent = `my Calculator`;
    //    }
    // })



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



    if (hours <= 9) {
        clockHours.textContent = `0${hours}`;
    } else {
        clockHours.textContent = `${hours}:`
    }

    if (minutes <= 9) {
        clockMinutes.innerHTML = `0${minutes}:`;
    } else {
        clockMinutes.innerHTML = `${minutes}:`
    }

    if (seconds <= 9) {
        clockSeconds.innerHTML = `0${seconds}`
    } else {
        clockSeconds.innerHTML = `${seconds}`
    }
}

setInterval(digitalClock, 1000)

