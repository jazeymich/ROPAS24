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