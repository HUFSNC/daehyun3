let button = document.getElementById("button");

button.onclick = function() {
    let x = document.getElementById("x");
    let y = document.getElementById("y");

    let sum = parseInt(x.value) + parseInt(y.value);

    document.getElementById("result").value = sum;
}