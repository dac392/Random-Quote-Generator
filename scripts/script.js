


//holds all the quotes that we can cycle through
const quotes = [
    {   quote:"I do not fear computers. I fear lack of them.",
        source:"Isaac Asimov",
        citation:"probably Twitter",
        year: 2016
    },
    {
      quote:"A computer once beat me at chess, but it was no match for me at kick boxing.",
      source:"Emo Philips",  
      citation: "maybe twitter",
      year: 2016
    },
    {
        quote: "Computer Science is no more about computers than astronomy is about telescopes",
        source: "Edsger W. Dijkstra",
        citation: "Facebook?",
        year: 2016
    },
    {
        quote: "The computer was born to solve problems that did not exist before.",
        source: "Bill Gates",
        citation: "definitely Twitter",
        year: 2016
    },
    {
        quote: "Standards are always out of date.  That’s what makes them standards.",
        source: "Alan Bennett",
        citation: "My space",
        year: 2016
    }
];
const cycled_quotes = [0,0,0,0,0];      //keeps track of the quotes that have been seen so that we can randomly cycle through all of the quotes without repeating before all quotes have been seen once.
let num_seen = 0;                       //total number of quotes seen thus far

/*
    gets a random number of for an index of some quote not yet seen.
    if all the quotes have been seen, it restarts the count so that we can randomly cycle through the quotes again.
*/
function getRandomQuote(){
    let randy;
    do{
        randy = Math.floor(Math.random()*quotes.length);
    }while(cycled_quotes[randy]!== 0);
    cycled_quotes[randy]++;
    num_seen++;

    if(num_seen === cycled_quotes.length){
        for(let i = 0; i < cycled_quotes.length; i++){
            cycled_quotes[i]--;
        }
        num_seen = 0;
    }
    return quotes[randy];
}

/*
    1. gets a random quote by calling the getRandomQuote function
    2. builds an html string and insets it intp the element with id #quote-box
*/
function printQuote(){
    let obj = getRandomQuote();
    let html = ``;
    html+=`<p class="quote">${obj.quote}</p>`;
    html+=`<p class="source">${obj.source}<span class="citation">${obj.citation}</span><span class="year">${obj.year}</span></p>`
    document.getElementById('quote-box').innerHTML = html;
}

//gets element by id #load-quote and adds an event listener of click and calls printQuotes function when trigered
document.getElementById('load-quote').addEventListener("click", printQuote, false);