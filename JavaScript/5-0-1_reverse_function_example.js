//Reverse Function Example

function reverseString(reverseMe) {
    var reversed = "";
    for (var i = reverseMe.length -1; i>=0; i--) {
    reversed += reverseMe[i];
    }
    return reversed;
}

console.log(reverseString("Julia"));

//walk through code at python tutor: https://goo.gl/3YjhyV

