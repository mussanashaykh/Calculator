let result = document.getElementById("result");

function appendToResult(value) {
    if (result.value == "Invalid Operation")
        return result.value = value;
    return result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    if (result.value != "") {
        result.value = eval(result.value);
    } else {
        result.value = "Invalid Operation";
    }
}
