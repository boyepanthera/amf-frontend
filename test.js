const myStr = "000107      0007 CASH & TELLER SUSPENSE/CASH IN TRANSIT               4,419,276.50 Dr                       0.00                  4,419,276.50 Dr"

//replace all comma with empty space
const newStr = myStr.replace(/,/g, "");

//space removal
const newerStr = newStr.split(/\s/).join("");

//splitter
let newestStr = newerStr.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+)?|\.[0-9]+/g);
console.log(newestStr);