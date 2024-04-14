/*
const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3];

for (let i = 1; i <= 10; i++) {
if (i % 3 === 0 ){
continue;
}
console.log(i);
if (i === 8) {
break;

}

}
*/


document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});