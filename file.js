function sayHello() {
  console.log("Hello World!");
}

function alertHello() {
  alert("Hello World!");
}

function strangerHello() {
  var p = document.getElementById("hello");
  p.innerHTML="Hello World!";
}

function button4Hello() {
  var name = prompt("Put Your Name Here");
  var p = document.getElementById("hello1");
  p.innerHTML="Hello, " + name;
}
