function btnclick() {
    var inputevalue = getinputvalue('myinput');
    var result = sumNnumsvalue(inputevalue);
    console.log("Input:", inputevalue);
    console.log("Result:", result);
    setvalue('restdisplay', result, inputevalue);
}

function getinputvalue(elementId) {
    var n = parseInt(document.getElementById(elementId).value);
    return n;
}

function sumNnumsvalue(n) {

    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    // recursion
    // var result = n * (n + 1) / 2;  time-complexity = O(o);
    return result;
}

function setvalue(elementId, finalresult, inputevalue) {
    const selectedid = document.getElementById(elementId);
    selectedid.innerText = 'Total : ' + finalresult + '  of  ' + inputevalue;

    console.log(selectedid);
}
