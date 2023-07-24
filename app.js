'use strict';

// generates random numbers between min and max of customer values
function randomNumber(){
    return (
        Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCust);
}

// store the min/max hourly customers 
// const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

// average cookeis per customer
function generateSales(){
    for (let i = 0; i < this.hours.length; i++){
        let customers = this.getRandomCust();
        let cookiesPurchased = customers * this.avgCookies;
        this.cookieSales.push(cookiesPurchased);
    }
}

let seattleMin = 23;
let seattleMax = 65;

const seattle = {
    minCustPerHour: seattleMin,
    maxCustPerHour: seattleMax,
    avgCookies: 6.3,
    getRandomCust: randomNumber,
    hours:[
        '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
    ],
    cookieSales: [],

    projectedCookieSales: function() {
        for (let i = 0; i < this.hours.length; i++){
            let cust = this.getRandomCust(); 
            let cookiesPurchased = cust * this.avgCookies;
            this.cookieSales.push(cookiesPurchased);
        }
    },
};
seattle.getRandomCust();
seattle.projectedCookieSales();
console.log('Seattle Sales: ', seattle.cookieSales);
