myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

for (let i = 0; i < myarray.length; i++) {

    sum += i;

}
var avarage = sum / myarray.length + 1;

console.log(avarage);