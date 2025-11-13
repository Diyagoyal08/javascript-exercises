 const palindromes = function (str) {
  // remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // compare cleaned string with its reverse
  return cleaned === cleaned.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
