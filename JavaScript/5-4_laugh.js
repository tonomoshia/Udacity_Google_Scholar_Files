/*
 * Programming Quiz: Laugh (5-4)
 */
// Directions:
//Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

var laugh = function(num) {
    var ha = "";
       for (var a = 1; a <= num; a++) {
           ha += "ha"
       }
       return ha += "!"
   }
   console.log(laugh(10));
   
   // re-used my function from 5-2_laugh_it_off.js
   