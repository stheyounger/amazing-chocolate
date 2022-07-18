console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")
console.log("hello world")

document.write("Hey there")

var textField = document.querySelector(".message-input")
var button = document.querySelector(".dont-click-me-button")

button.onclick = function() {
    var message = textField.value
    console.log("You clicked me!  You said", message)
    document.write(message)

}