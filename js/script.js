/******************************************
Tristan Young: Techdegree
project 1 - A Random Quote Generator
******************************************/

/*** 
  Create an array with 5 objects.
  Add 4 properties to each object: quote, source, citation, year.
  Make sure to separate objects with comma.
***/
//Each quote should have one object with four proeperties
var quotes = [
  {
    quote: "Faith is taking the first step even when you can't see the whole staircase.",
    source: "Martin Luther King Jr.",
    citation: "www.goodreads.com",
    year: '2019'
  },
  {
    quote: "Change takes courage.",
    source: "Alexandria Ocasio-Cortez",
    citation: "www.brainyquote.com",
    year: '2018',
    description: " American politician, U.S. Representative for New York's 14th congressional district."
  },
  {
    quote: "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.",
    source: "Mark Zuckerberg" ,
    citation: "www.goodreads.com",
    year: '2019'
  },
  {
    quote: "People say nothing is impossible, But I do nothing everyday. ",
    source: "A.A. Milne, Winnie-the-Pooh",
    citation: "https://theweekendfox.com/9-quotes-from-christopher-robin-that-are-good-for-the-soul/",
    year: '2018'
  },
  {
    quote: "Try not to become a person of success but rather a person of value. ",
    source: "Albert Einstein",
    // commented out citation and year to include 'if' statement
     
  }
];


/***
  Declare function named  `getRandomQuote` function to:
   - Create variable named quoteGenerator to store random number 
   - return quotes array
***/
function getRandomQuote(array) {
var quoteGenerator = Math.floor(Math.random() * quotes.length);
return quotes[quoteGenerator];
}

console.log (getRandomQuote());

function ranColor(){
  var a = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var c = Math.floor(Math.random() * 255);
  var bgColor = "rgb(" + a + "," + b + "," + c + ")";
  console.log(bgColor);
   
     document.body.style.background = bgColor;
     }
 
 ranColor();

//function expression in var result
function printQuote() {
var message = "";
var result = getRandomQuote(quotes);
message = "<p class='quote'>" + result.quote +"</p>";
message += "<p class='source'>" + result.source;
if (result.citation){
  message += "<span class='citation'>" + result.citation + "</span>"
}
if (result.year) {
  message += "<span class='year'>" + result.year + "</span>"
}
if (result.description) {
  message += "<span class='description'>" + result.description + "</span>"
}
message += "</p>";

console.log (message);



document.getElementById('quote-box').innerHTML = message;
//quote-box is element ID located in the css file
}

setInterval(function(){ printQuote(); }, 25000);
function specialThanks(){
  var thanks = "";
  thanks = alert("Thank You Team TreeHouse");
}
//add eventlistner for random color function
document.getElementById('loadQuote').addEventListener("click", ranColor, false);

//loadQuote is the button ID
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

document.getElementById('newQuote').addEventListener("click", specialThanks, false);







