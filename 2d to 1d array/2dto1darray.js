
let twodaimentionalarray = [[1, 2], [3, 4]];

let myarray = [];

for (let i = 0; i < twodaimentionalarray.length; i++) {
    console.log(twodaimentionalarray[i] + " ");
    for (var j = 0; j < twodaimentionalarray[i].length; j++) {
        myarray.push(twodaimentionalarray[i][j]);
    }


}
console.log(myarray);
