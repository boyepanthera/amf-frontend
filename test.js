//replace all comma with empty space
const newStr = myStr.replace(/,/g, "");

//space removal
const newerStr = newStr.split(/\s/).join("");

//splitter
let newestStr = newerStr.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+)?|\.[0-9]+/g);