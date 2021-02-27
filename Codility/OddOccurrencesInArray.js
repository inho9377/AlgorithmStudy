function solution(A) {
    A.sort((a,b) => a-b);

    var count=0;
    var lastValue = A[0];
    for(var i=0; i<A.length; i++){
        if(A[i] === lastValue){
            count++;
        }
        else{
            if(count % 2 === 1){
                return lastValue;
            }
            lastValue = A[i];
            count=1;
        }
    }
    return A[A.length-1];
}


solution([9, 3, 9, 3, 9, 7, 9]);