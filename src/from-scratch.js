const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++){
    console.log(i)
  }
};

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++){
    console.log(i)
  }
};

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) //setting the base for counting from zero, then setting the condition that
    console.log(i) // ^^ ...as long as i is less than 10, count up by adding two. this logs all the even numbers within 10.
};
// console.log("loopEvenNumbersUpTo10 test")
// loopEvenNumbersUpTo10(); //test

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--){ //starting point is 5, as long as i is more than or equal to 0, count down (i--)
    console.log(i)
  }
};
// console.log("countdown5to0 test")
// countdown5to0(); //test

const loopUpToNum = (num) => {
  for (i = 0; i < num; i++){
    console.log(i)
  }
};

const fizzbuzz = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz")}
      else if (i % 3 === 0){
        console.log("fizz")
      } else if (i % 5 === 0) {
        console.log("buzz")
      } else {
        console.log(i)
      }
  } 
};

console.log(fizzbuzz());

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
