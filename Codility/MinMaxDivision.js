// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    var bot = -1;
    var top = (M*A.length);
    top = Math.floor(top);
    
    while(bot + 1 < top){
        const mid = Math.floor((bot+top)/2);
        if(IsPossible(mid, K, A)){
            top = mid;
        }
        else{
            bot = mid;
        }
    }

    return top;
}



function IsPossible(div, K, A){
    var sumv=0;
    var count=0;
    for(var i=0; i<A.length; i++){
        if(A[i] > div){
            return false;
        }

        if(sumv+A[i] > div){
            count++;
            sumv=0;
        }
        sumv += A[i];
    }

    if(count === 0){
        count++;
    }
    else if(sumv>0){
        count++;
    }

    return count <= K;
}