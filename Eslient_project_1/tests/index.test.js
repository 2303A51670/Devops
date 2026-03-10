const add = require("../src/index");

if (add(2, 3) !== 5) {
  throw new Error("Test failed");
}

console.log("All tests passed ✅");
