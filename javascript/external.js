//
// const user_name = window.prompt(
//   "Please enter your name",
//   "Type your name here"
// );
//
// const visitorName = user_name || "Visitor";
//
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("header").querySelector("h1").textContent =
//     "Hello, welcome " + visitorName + "!";
// });

function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";

    // A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
