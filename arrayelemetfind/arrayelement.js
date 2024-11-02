function countOccurrences(arr) {

    let findelement = {};

    for (var i = 0; i < arr.length; i++) {

        var element = arr[i];


        if (findelement[element]) {
            findelement[element] += 1;
        } else {
            findelement[element] = 1;
        }
    }

    return findelement;
}

console.log(countOccurrences(['apple', 'banana', 'apple', 'mango', 'jackfruite', 'banana']));

