/*

let randomNumber = 0;

while(randomNumber < 0.5){
  randomNumber = Math.random();
  console.log(randomNumber);
}



const todoList = [
'make dinner',
'wash dishes',
'watch youtube'
];

for(let i = 0; i < todoList.length; i++){
  const value = todoList[i]; 
  console.log(value);
}


*/

//accumulator pattern
const nums = [1, 1, 3];

let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  total += num;

  console.log(total);
}

const numsdoubled = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsdoubled.push(num * 2);

  console.log(numsdoubled);
}
