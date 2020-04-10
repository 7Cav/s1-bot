const moment = require('moment');
// Class to make life easier
class Person {
    // How constructors are used: var something = Person(constructor, items, here);
    // This is very similar to how C# works if you ever get into it.
    constructor(date) {
        // Set the Person.inputYear to the year. Do the same with month and day
        this.inputDate = date;
        this.today = moment();
    }
    
    getToday() {
        var today = moment().format('LLL');
        return today;
    }

    getDifference() {
        var diff = moment(`${this.inputDate}`, "DD/MM/YYYY").fromNow();
        return diff;
    }

    // Variables for the Person
    // firstName = '';
    // lastName = '';
    // milpac;
    // shortRank;

    // Create promotion finder: https://github.com/7Cav/CAV-Promotion-GCM/blob/master/Personnel.py#L65
    // Get all possible promotions up until input date.
    // pfcArr = [];
    // spcArr = [];
    // cplArr = [];




    
    // Write to file for promotions: https://github.com/7Cav/CAV-Promotion-GCM/blob/master/Personnel.py#L344
}

module.exports = Person