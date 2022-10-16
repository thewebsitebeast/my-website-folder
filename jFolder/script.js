






// Initiate counter
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;

// Function to increment counter
function add() {
  counter += 1;
  return counter;
}
function add1() {
  counter1 += 1;
  return counter1;
}
function add2() {
  counter2 += 1;
  return counter2;
}
function add3() {
  counter3 += 1;
  return counter3;
}
function add4() {
  counter4 += 1;
  return counter4;
}
function add5() {
  counter5 += 1;
  return counter5;
}
function add6() {
  counter6 += 1;
  return counter6;
}
function add7() {
  counter7 += 1;
  return counter7;
}

function myMenu() {
document.getElementById("demo").innerHTML = "The counter is:" + " " + add();

if ((counter % 2) == 1 ) {
document.getElementById("magic").style.display = "flex";
} 
else if ((counter % 2) == 0) {
document.getElementById("magic").style.display = "none";
}
}
function myjollof() {
document.getElementById("demo1").innerHTML = "The counter is:" + " " + add1();

if ((counter1 % 2) == 1 ) {
document.getElementById("jollof").style.display = "block";
} 
else if ((counter1 % 2) == 0) {
document.getElementById("jollof").style.display = "none";
}
}
function mypancake() {
document.getElementById("demo2").innerHTML = "The counter is:" + " " + add2();

if ((counter2 % 2) == 1 ) {
document.getElementById("pancake").style.display = "block";
} 
else if ((counter2 % 2) == 0) {
document.getElementById("pancake").style.display = "none";
}
}
function mystirfry() {
document.getElementById("demo3").innerHTML = "The counter is:" + " " + add3();

if ((counter3 % 2) == 1 ) {
document.getElementById("stirfry").style.display = "block";
} 
else if ((counter3 % 2) == 0) {
document.getElementById("stirfry").style.display = "none";
}
}
function myporridge() {
document.getElementById("demo4").innerHTML = "The counter is:" + " " + add4();

if ((counter4 % 2) == 1 ) {
document.getElementById("porridge").style.display = "block";
} 
else if ((counter4 % 2) == 0) {
document.getElementById("porridge").style.display = "none";
}
}
function mymoinmoin() {
document.getElementById("demo5").innerHTML = "The counter is:" + " " + add5();

if ((counter5 % 2) == 1 ) {
document.getElementById("moinmoin").style.display = "block";
} 
else if ((counter5 % 2) == 0) {
document.getElementById("moinmoin").style.display = "none";
}
}
function mysoup() {
document.getElementById("demo6").innerHTML = "The counter is:" + " " + add6();

if ((counter6 % 2) == 1 ) {
document.getElementById("soup").style.display = "block";
} 
else if ((counter6 % 2) == 0) {
document.getElementById("soup").style.display = "none";
}
}
function myofada() {
document.getElementById("demo7").innerHTML = "The counter is:" + " " + add7();

if ((counter7 % 2) == 1 ) {
document.getElementById("ofada").style.display = "block";
} 
else if ((counter7 % 2) == 0) {
document.getElementById("ofada").style.display = "none";
}
}


function myLinker() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("info").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (x == "") {
    text = "Come on! Don't be shy. Tell us!";
  } else if (x !== ""){
    text = "Nice to meet you.";
    document.getElementById("greetings").innerHTML= "Hi" + " " + x + "," + " " + "what would you like to have today?";
  document.getElementById("appear").style.display = "block";
 }
  document.getElementById("promo").innerHTML = text;
}

function myAppearance() {
  document.getElementById("clearfix").style.display = "block";
  document.getElementById("joker").style.display = "none";
}

function myApology() {
  alert("Only Moinmoin is available at Sanzy\'s Kitchen for now. We're trying our best to provide you with as many options as possible in the future. Please bear with us. We sincerely apologize.")
}




function validateForm() {
  let x = document.forms["myForm"]["fav_language"].value;
  if (x == "CSS") {
    alert("This is css");
  } else if (x == "HTML") {
    alert ("This is HTML")
  }
   else if (x = "JAVASCRIPT") {
    alert ("This is javascript")
  }
}