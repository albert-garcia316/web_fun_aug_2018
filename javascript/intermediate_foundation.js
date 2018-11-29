//1
//sigma
function sigma(x){
    var sum = 0;
    for (var i = 1; i <= x; i++){
        sum += i;
    }
    return sum;
}

//2
//factorial
function factorial(num){
    var fact = 1;
    for (var i = 2; i <= mum; i++){
        fact *= i;
    }
    return fact;
}

//3
//Fibonacci
function fibonacci(x){
    var fact = [0,1];
    var fib = fact[0] + fact[1];
    if (x == 0){
        fib = 0;
        return fib;
    }
    if (x == 1){
        fib = 1;
        return fib;
    }
    for (var i = 2; i <= x; i++){
        fact.push(fact[i - 2] + fact[i - 1])
        fib = fact[i - 2] + fact[i - 1];
    }
    return fib;
}
console.log(fibonacci(5));

//4
//second to last
function secondToLast(arr){
    if (arr.length > 2){
        return arr[arr.length - 2];
    }
    else {
        return null;
    }
}
console.log(secondToLast([42,true,4,'liam',7]));

//5
//nth to last
function nthToLast(arr,y){
    if (arr.length > y){
        return arr[arr.length - y];
    }
    else {
        return null;
    }
}
console.log(nthToLast([5,2,3,6,4,9,7],3));

//6
//second largest
function secondLargest(x){
    var max = x[0];
    var second = 0;
    if (x.length > 2){
        for (var i = 0; i < x.length; i++){
            if (x[i] > max){
                max = x[i];
            }
            if (x[i] > second && x[i] < max){
                second = x[i];
            }
        }
        return second;
    }
    else {
        return null;
    }
}
console.log(secondLargest([42,1,4,3.14,7]));

//7
//double trouble
function doubleTrouble(x){
    for (var i = 0; i < x.length; i += 2){
        x.splice(i,0,x[i]);
    }
    return x;
}
console.log(doubleTrouble([1,2,3,4]));

//part 2

//1
//recirsive fibonacci
function fibRecursion(n){
    if (n == 0 || n == 1){
        return n;
    }
    return fibRecursion(n - 2) + fibRecursion(n -1);
}
y = fibRecursion(10);
console.log(y);
