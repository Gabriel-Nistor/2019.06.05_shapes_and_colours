var sayColor = document.getElementById("sayColor");
var buttonPurpleBox = document.getElementById("purpleBox");
var buttonRedBox = document.getElementById("redBox");
var buttonBlueBox = document.getElementById("blueBox");
var buttonBlackBox = document.getElementById("blackBox");
var buttonGreenBox = document.getElementById("greenBox");

function purple() {
    var initialText = sayColor.innerText;
    var textulFinal = " Purple ";
    sayColor.innerText = textulFinal;
}
buttonPurpleBox.addEventListener("click", purple);

function red() {
    var initialText = sayColor.innerText;
    var textulFinal = " Red ";
    sayColor.innerText = textulFinal;
}
buttonRedBox.addEventListener("click", red);

function blue() {
    var initialText = sayColor.innerText;
    var textulFinal = " Blue ";
    sayColor.innerText = textulFinal;
}
buttonBlueBox.addEventListener("click", blue);

function black() {
    var initialText = sayColor.innerText;
    var textulFinal = " Black ";
    sayColor.innerText = textulFinal;
}
buttonBlackBox.addEventListener("click", black);

function green() {
    var initialText = sayColor.innerText;
    var textulFinal = " Green ";
    sayColor.innerText = textulFinal;
}
buttonGreenBox.addEventListener("click", green);