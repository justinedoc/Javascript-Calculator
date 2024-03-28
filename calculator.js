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
    const newNameInput = document.getElementById("newName").value.trim();
    const oldName = document.getElementById("currentCalculatorName").textContent;

    


    if (newNameInput === "") {
        alert("input a valid name");
    }else{
        let display = confirm("Set new name to " + newNameInput + "?");
        if (display === true) {
            document.getElementById("currentCalculatorName").textContent = newNameInput + "'s Calculator";
        }
        
    }    




    let CurrentFirstLetterValue = document.getElementById("CurrentFirstLetterValue");
    const newFirstLetterValue = document.getElementById("newName").value[0].toUpperCase()
    CurrentFirstLetterValue.value = newFirstLetterValue + "C";
    
}