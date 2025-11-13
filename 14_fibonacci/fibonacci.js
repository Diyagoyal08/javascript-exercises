 const fibonacci = function(n) {
  // Convert string inputs (like from HTML forms) to number
  n = Number(n);

  // Handle invalid / negative cases
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  // Loop to generate up to nth term
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
