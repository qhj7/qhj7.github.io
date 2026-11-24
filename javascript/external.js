
const user_name = window.prompt(
  "Please enter your name",
  "Type your name here"
);

const visitorName = user_name || "Visitor";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header").querySelector("h1").textContent =
    "Hello, welcome " + visitorName + "!";
});
