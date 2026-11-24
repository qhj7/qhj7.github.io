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

  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";
  return message;
}

function webmap_table()
{
  document.write("<table width=100%>");

  for (var row = 0; row < 2; row++) {
    document.write("<tr>");

    for (var column = 0; column < 3; column++) {
      document.write("<td>" + row + "," + column + "</td>");
    }

    document.write("</tr>");
  }

  document.write("</table>");
  return "";
}
