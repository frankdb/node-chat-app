var moment = require('moment');

var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMMM Do, YYYY'));

console.log(date.format('h:MM a'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

// create timestamp with Moment. exactly the same as new Date().getTime()

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))

// by default it uses current time. if you pass in a timestamp it uses that time
// pass in time stamp and use format
