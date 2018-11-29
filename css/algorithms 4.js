//1
function greaterThan(x,y) {
    count = 0;
    for ( var i = 0; i < x.length; i++){
        if (x[i] > y) {
            count += 1;
        }
    }
    console.log(count);
}
greaterThan([1,3,5,8],2)

//2
function maxMinAvg(x){
    var max = x[0];
    var min = x[0];
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
        if (x[i] > max){
            max = x[i];
        }
        if (x[i] < min){
            min = x[i];
        }
    }
    console.log(max,min,sum / x.length);
}
maxMinAvg([1,2,3,4])

//3
function noNegatives(x){
    var newarr = [];
    for (var i = 0; i < x.length; i++){
        if (x[i] < 0){
            newarr.push('dojo');
        }    
        else {
            newarr.push(x[i]);
        }
    }
    return newarr;
}
noNegatives([1,2,3,-4])

//4
function removeVals(a,x,y){
    var newarr = [];
    if (x >= 0 && x < y && y < a.length){
        for (var i = 0; i < a.length; i++){
            if ( i !== x && i !== y){
                newarr.push(a[i]);
            }
        }
    } 
    console.log(newarr);
}
removeVals([20,30,40,50,60,70],2,3);
