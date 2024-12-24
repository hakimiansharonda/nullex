const array1 = [1, 2, 3, 4, 5]; // Contains only positive numbers
const array2 = [-1, -2, -3, -4, -5]; // Contains only negative numbers
const array3 = [1, -2, 3, -4, 5]; // Contains a mix of positive and negative numbers

const sum1 = array1.reduce((acc, curr) => acc + curr, 0);
const sum2 = array2.reduce((acc, curr) => acc + curr, 0);
const sum3 = array3.reduce((acc, curr) => acc + curr, 0);

console.log(Math.abs(sum1) === array1.length); // true
console.log(Math.abs(sum2) === array2.length); // true
console.log(Math.abs(sum3) === array3.length); // false
