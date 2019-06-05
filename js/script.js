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
    year: '2018'
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
  }
];



/***
  Declare function named  `getRandomQuote` function to:
   - Create variable named quoteGenerator to store random number 
   - return quotes array
***/
function getRandomQuote(array) {
var quoteGenerator = Math.floor( Math.random() * (quotes.length));
return quotes[quoteGenerator];
}

//function expression in var result
function printQuote() {
var message = "";
var result = getRandomQuote(quotes);
message = "<p class='quote'>" + result.quote +"</p>";
message += "<p class='source'>" + result.source;
message += "<span class='citation'>" + result.citation + "</span>";
message += "<span class='year'>" + result.year + "</span>"
message += "</p>";

document.getElementById('quote-box').innerHTML = message;
//quote-box is element ID located in the css file
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('startQuote').addEventListner("click", printQuote, false);





