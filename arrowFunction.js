function greet(name) {
  return `Hello, ${name}!`;
}

const greet1 = (name) => {
  return `Hello, ${name}!`;
};

const nu = (num1, num2) => {
  return num1 + num2;
};

console.log(nu(10, 20));

const nu2 = (num) => {
  return num * num;
};

console.log(nu2(10));

//const sq = (array) => {
//array;
//return array[(num1 * num1, num2 * num2, num3 * num3)];
//};
////nums = [2, 3, 4, 5, 6];
//console.log(sq([2, 3, 4, 5, 6]));

const numbers = [4, 2, 3, 5, 9, 6, 12, 9];

let max = numbers[0];

numbers.forEach((num) => {
  if (max > num) {
    max = num;
  }
});
console.log(max);

let ns = [1, 2, 3, 4, 5, 6];

q = [];

ns.forEach((n) => {
  q.push(n * n);
});
console.log(q);
