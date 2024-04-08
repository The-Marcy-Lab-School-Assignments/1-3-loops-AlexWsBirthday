const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) { //inclusive meaning that it's not whether i is less than the end, but less than or equal to. which includes the end number.
    result += i;
  }
  return result;
};

//need someone to explain this to me
const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) { //not entirely sure i understand the order of printing this, but the function was re-assigning i by having i represent an index in both for loops.
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};

console.log(brokenNested());

module.exports = {
  brokenLoop,
  brokenNested,
};
