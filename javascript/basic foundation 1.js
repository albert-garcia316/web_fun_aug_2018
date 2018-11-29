//1 
//get 1-255
function a(){
    for (var i = 1;i < 256; i++){
        console.log(i);
    }
}
console.log(a);

//2
//get even 1000
function a(){
    var sum = 0;
    for (var i = 0; i <= 1000; i++){
        if (i % 2 == 0){
            sum += i;
        }
    }
    console.log(sum);
}
a();

//3
//sum odd 5000
function a(){
    var sum = 0;
    for (var i = 1; i < 5000; i += 2){
        sum += i;
    }
    console.log(sum);
}
a();

//4
//iterate an array
function a(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum;
}
a([1,2,5]);

//5
//find max
function a(x){
    var max = x[0];
    for (var i = 0; i < x.length; i++){
        if (x[i] > max){
            max = x[i];
        }
    }
    return max;
}
a([-3,3,10,7])

//6
//find average
function a(x){
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum / x.length;
}
a([1,3,5,7,20]);

//7
//arr odd
function retrunOdd(){
    var odd = [];
    for (var i = 1; i < 50; i++){
        if (i % 2 !== 0){
            odd.push(i);
        }
    }
    console.log(odd);
}
retrunOdd();

//8
//greater than y
function greaterThanY(arr,y){
    count = 0;
    for (var i =0; i < arr.length; i++){
        if (arr[i] > y){
            count += 1;
        }
    }
    return count;
}
greaterThanY([1,3,5,7],3);

//9
//squares
function squares(x){
    for (var i = 0; i < x.length; i++){
        x[i] *= x[i];
    }
    console.log(x);
}
squares([1,5,10,-2]);

//10
//Negatives
function noNegatives(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] < 0){
            x[i] = 0;
        }
    }
    console.log(x);
}
noNegatives([1,5,10,-2]);

//11
// max, min, avg
function maxMinAvg(x){
    var newarr = [x[0],x[0],0];
    for (var i = 0; i < x.length; i++){
        newarr[2] += x[i];
        if (x[i] > newarr[0]){
            newarr[0] = x[i];
        }
        if (x[i] < newarr[1]){
            newarr[1] = x[i];
        }
    }
    newarr[2] = newarr[2] / x.length;
    console.log(newarr);
}
maxMinAvg([1,5,10,-2]);

//12
//swap values
function swapValues(x){
    var temp = x[0];
    var newarr = x;
    newarr[0] = x[x.length - 1];
    newarr[x.length - 1] = temp;
    console.log(newarr)
}
swapValues([1,5,10,-2]);

//13
//Number to string
function noNegatives(x){
    for (var i = 0; i < x.length; i++){
        if (x[i] < 0){
            x[i] = 'Dojo';
        }
    }
    console.log(x);
}
noNegatives([-1,-3,2]);