//function range that takes the start, end and step of the array and picks the index values through loops
var range = (start, end, step = start < end ? 1 : -1) => {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

//function sum that computes the sum of the values of the array
var sum = (array) => {
  let total = 0;
  for(let value of array){
    total += value;
  }
  return total;
}

// writes -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10));
// writes -> [5, 4, 3, 2]
console.log(range(5, 2, -1));
// writes -> 55
console.log(sum(range(1, 10)));