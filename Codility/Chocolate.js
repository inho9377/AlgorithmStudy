// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    if(N === 1){
        return 1;
    }

    
    const gcd = getGcd(N, M);

    return N / gcd;

}



function getGcd(x, y){
    if(y === 0){
        return x;
    }

    return getGcd(y, x % y);
}