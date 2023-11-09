function countSevens(arr){
  let sevens = 0;
  for(let i = 0; i < arr.length; i = i + 1){
    if(arr[i] === 7){
      sevens = sevens + 1;
    }
  }
  return sevens;
}

function createRandoms(limit){
  const numbers = [];
  while(numbers.length < limit){
    const num = Math.ceil(Math.random()*10);
    numbers.push(num);
  }
  return numbers;
}

const numbers = createRandoms(1000000);

/*
let sevens = 0;
for(let i = 0; i < numbers.length; i = i + 1){
  if(numbers[i] === 7){
    sevens = sevens + 1
  }
}

console.log(sevens);
*/
//console.log(createRandoms(3));
//console.log(countSevens([]));
console.log(countSevens(numbers));