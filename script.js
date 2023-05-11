// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("logo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

// function sleep(ms) {
// return new Promise(resolve => setTimeout(resolve, ms));
//}
//async function Tutor() {
// document.write('Hello Toturix');
// for (let i = 1; i <10 ; i++) {        
//    await sleep(1000);
//      document.write( i +" "+"Welcome to tutorix" + " " + "</br>")
function boxHover() {
  alert("Try To CheckOut My Github Page My Friend!");
}

document.getElementById('cartoon-boy').onmouseover = boxHover();