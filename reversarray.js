

myarray = ['apple', 'banana', 'apple', 'milk']

// with loop
reversearray = [];
for (let i = myarray.length - 1; i >= 0; i--) {
    reversearray.push(myarray[i]);
}
console.log(myarray);
console.log(reversearray);

newreversarray = myarray.reverse();
console.log(newreversarray);

againnewarray = [...newreversarray].reverse();
console.log(againnewarray);

