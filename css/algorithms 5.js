//1
function resetNegatives(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] < 0){
            x[i] = 0;
        }
    }
    console.log(x);
}
resetNegatives([1,2,-1,-3]);

//2
function moveForward(x){
    for (var i = 1; i < x.length; i++){
        if (i == x.length - 1){
            x[i - 1] = x[i];
            x[i] = 0;
        }
        else {
            x[i - 1] = x[i];
        }
    }
    console.log(x);
}
moveForward([1,2,3,5]);

//3
function returnReversed(x){
    var newarr = [];
    for (var i = x.length - 1; i >= 0; i--){
        newarr.push(x[i]);
    }
    console.log(newarr);
}
returnReversed([1,2,3]);

//4
function repeatTwice(x){
    var newarr = [];
    for (var i = 0; i < x.length; i++){
        newarr.push(x[i]);
        newarr.push(x[i]);
    }
    console.log(newarr);
}
repeatTwice([4,'Ulysses',42,'false']);