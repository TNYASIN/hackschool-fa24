/*
Welcome to week 2 of ACM Hack's Hack School! We'll be 
covering Javascript for this week. There are a lot of 
function templates that we'll fill out together as we
go through the workshop and learn these concepts.
*/


/*
For this function logTrip, we're passing in a trip name
(i.e. "Thanksgiving in Japan"), the number of days for this 
trip (i.e. 1), and the cost per day in dollars (i.e. 500). 
Use console.log to output the trip's name and its total cost. 
HINT: Use * to multiply two numbers, and feel free to use multiple
console.log statements. Test your function when you're done!
*/
function logTrip(tripName, tripLen, costPerDay){
console.log("Trip Name: ",tripName);
console.log("Total cost: ",tripLen*costPerDay);
}

/* Uncomment the line below to call the function. */
 logTrip("Thanksgiving in Japan", 1, 500);


/*
Below, we've created an object to represent our Japan trip.
However, things have changed — we want to stay in Japan for 3
days now, and the cost has been bumped up to $650. Edit tripObject
to reflect this new data. 
EXTRA: We have some friends joining us for our trip. Add in a new
 property to tripObject — numTravelers — and set it equal to 4.
*/
let tripObject = {
    name: "Thanksgiving in Japan",
    tripLen: 1,
    costPerDay: 500,
};

/* EDIT TRIPOBJECT HERE: */
tripObject.name = "Diwali in India";
tripObject.tripLen = 3;
tripObject.costPerDay = 100;

console.log(tripObject);

///////////////////////////

/*
Below, we've created two tripObjects. We're on a tight budget,
so make a function called cheaperTrip that takes both tripObjects 
as inputs, and returns the tripObject that has the cheaper individual cost. 
HINT: individual cost = tripLen * costPerDay / numTravellers
HINT: use an if statement to see if tripObject1's individual cost
is bigger/smaller than tripObject2's.
*/

const tripObject1 = {
    name: "Christmas in Korea",
    tripLen: 4,
    costPerDay: 237,
    numTravellers: 3,
}

const tripObject2 = {
    name: "Christmas in Taiwan",
    tripLen: 5,
    costPerDay: 367,
    numTravellers: 6,
}
/* MAKE YOUR FUNCTION HERE */
function cheaperTrip(trip1,trip2){
 let tripCost1 = trip1.Len + trip1.costPerDay/trip1.numTravellers;
 let tripCost2 = trip2.Len + trip2.costPerDay/trip2.numTravellers;
  if(tripCost1 <tripCost2 )
    return trip1;
  else
    return trip2;
}



///////////////////////////

/* Uncomment the below line to test out your function */
console.log(cheaperTrip(tripObject1, tripObject2));

/*
Below, we've created an array of travel destinations. These
represent all the places we're going to visit. We're
interested in seeing if a certain travel destination is 
already included in this array. Create an arrow function 
called isTripIncluded that takes in this array, and some trip
destination. Return true if the trip destination is inside
the array, and false otherwise.

HINT: Use a for loop to iterate through the array, and compare 
each iteration to our target destination. 
*/


const destinations = [
    "Manila",
    "Shanghai",
    "Taipei",
    "Barcelona",
    "Munich",
    "New York",
]

/* MAKE YOUR FUNCTION HERE */
let isTripIncluded = (traveldestinations, targetdestination) =>
{
    for (i = 0; i< traveldestinations.length; i++)
    {
        if(targetdestination == traveldestinations[i])
            return true;
    }
    return false;
}

///////////////////////////

/* 
    Uncomment the below line to test out your function.
    Feel free to test whatever target destination you'd like.
*/
console.log(isTripIncluded(destinations, "Taipei"));


/*
We’re planning an international trip, and we want to check the exchange 
rates between different currencies. We've made a function 
`getExchangeRate` that takes two currencies (e.g., USD and EUR) and simulates 
retrieving the exchange rate after a delay using `setTimeout`.
*/

function getExchangeRate(fromCurrency, toCurrency) {
  // Simulated exchange rate data
  const exchangeRates = {
      'USD': { 'EUR': 0.84, 'JPY': 110.49 },
      'EUR': { 'USD': 1.19, 'JPY': 130.02 },
  };

  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetching ${fromCurrency} to ${toCurrency}`)
          // Check if the exchange rate exists for the given currencies
          if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
              resolve(`1 ${fromCurrency} = ${exchangeRates[fromCurrency][toCurrency]} ${toCurrency}`);
          } else {
              reject(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`);
          }
      }, 1500);  // Simulating a delay of 1.5 seconds
  });
}

/*
TODO:
Write an async function `fetchExchangeRate` that uses `await` 
to retrieve the exchange rate from the `getExchangeRate` function, 
and handles success and errors using .then/catch.
*/ 
async function fetchExchangeRate(fromCurrency, toCurrency){
  await getExchangeRate(fromCurrency, toCurrency)
    .then(message => console.log(message))
    .catch(error => console.log(error));
}

// YOUR CODE HERE

// Example calls:
fetchExchangeRate('USD', 'EUR')
fetchExchangeRate('USD', 'GBP')  // This should trigger an error

