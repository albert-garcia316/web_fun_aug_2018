//1
//biggie size
function biggieSize(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] > 0){
            x[i] = 'Big';
        }
    }
    console.log(x);
}
biggieSize([-1,3,5,-5]);

//2
//Print Low Return High
function printLow(x){
    var min = x[0];
    var max = x[0];
    for (var i = 0; i < x.length; i++){
        if (x[i] < min){
            min = x[i];
        }
        if (x[i] > max){
            max = x[i];
        }
    }
    console.log(min);
    return max;
}
printLow([1,3,10,5])

//3
//Print one Return Another
function returnAnother(x){
    var odd = [];
    for (var i = 0; i < x.length; i++){
        if (x[i] % 2 !== 0){
            odd.push(x[i]);
            break;
        }
    }
    console.log(x[x.length - 2]);
    return odd;
}
returnAnother([2,3,5,8,10]);

//4
//Double Vision
function callingDouble(x){
    var double = [];
    for (var i = 0; i < x.length; i++){
        double.push(x[i] * 2)
    }
    console.log(double);
}

//5
//Count Positives
function countPos(x){
    var temp = 0;
    for (var i = 0; i < x.length; i++){
        if (x[i] > 0){
            temp += 1;
        }
    }
    x[x.length - 1] = temp;
    console.log(x);
}

//6
//Even and Odds
function evenAndOdd(x){
    for (var i = 2; i < x.length; i++){
        if (x[i] % 2 !== 0 && x[i - 1] % 2 !== 0 && x[i - 2] % 2 !== 0){
            console.log('thats odd')
        }
        if (x[i] % 2 == 0 && x[i - 1] % 2 == 0 && x[i - 2] % 2 == 0){
            console.log('even more so')
        }
    }
}
evenAndOdd([2,2,2,1,4])

//7
//Increment the Seconds
function increment(arr){
    for (var i = 1; i < arr.length; i += 2){
        arr[i] += 1
        console.log(arr[i]);
    }
    return arr;
}

//8
//Previous Lengths
function previousLengths(arr){
    var temp = '';
    var count = arr[0].length;
    for (var i = 1; i < arr.length; i++){
        temp = arr[i];
        arr[i] = count;
        count = temp.length;
    }
    console.log(arr);
}
previousLengths(['hello','dojo','awesome','coding'])

//9
//Add Seven to Most
function addSeven(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr.push(arr[i] + 7)
    }
    console.log(newarr);
}

//10
function reverseArr(arr){
    var temp = arr[0];
    for (var i = 1; i < arr.length / 2; i++){
        arr[i - 1] = arr[arr.length - i]
        arr[arr.length - i] = temp;
        temp = arr[i];
    }
    console.log(arr);
}
reverseArr([3,1,6,4,2])

//11
//outlook negative
function outlookNegative(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        newarr.push(arr[i] *= -1)
        }
        else {
            newarr.push(arr[i]);
        }
    } 
    console.log(newarr);
}
outlookNegative([1,-3,5]);

//12
//always hungery
function hungery(x){
    var count = 0;
    for (var i = 0; i < x.length; i++){
        if (x[i] == 'food'){
        count += 1;
        console.log('yummy');
        }
    }
    if (count < 1){
        console.log("I'm hungery");
    }
}
hungery(['food','dojo','coding','food'])

//13
//swap toward the center
function toCenter(arr){
    var temp = arr[0];
    for (var i = 1; i <= arr.length / 2; i += 2){
        arr[i - 1] = arr[arr.length - i]
        arr[arr.length - i] = temp;
        temp = arr[i + 1];
    }
    console.log(arr);
}
toCenter([1,2,3,4,5,6])
toCenter([true,42,'ada',2,'pizza'])

//14
//scale the arr
function scaleArr(arr,x){
    for (var i = 0; i < arr.length; i++){
        arr[i] *= x;
    }
    console.log(arr);
}
scaleArr([1,2,3],3);