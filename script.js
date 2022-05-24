let books = new Array(
  " Harry Potter and the Goblet of Fire",
  " Caddie Woodlawn",
  " The Fault in Our Stars",
  " Adventures of Huckleberry Finn"
);
let display = books.toString();

document.getElementById("titles").innerHTML = books.join("<br>") + "<br>";
document.getElementById("original");
document.getElementById("alphabetical");
document.getElementById("reverse");

function originalOrder() {
  document.getElementById("titles").innerHTML = display;
}

function alphabeticalOrder() {
  books.sort();
  document.getElementById("titles").innerHTML = books.join("<br>") + "<br>";
}

function reverseOrder() {
  books.sort();
  books.reverse();
  document.getElementById("titles").innerHTML = books.join("<br>") + "<br>";
}
