 const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'; 
    return string.repeat(num);
};

console.log(repeatString("hello", 3));  

// Do not edit below this line
module.exports = repeatString;
