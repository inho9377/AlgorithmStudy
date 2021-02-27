function solution(X, A) {

    var max = -1;
    var count = new Array(X).fill(0);

    for(var i=0; i<A.length; i++)
    {
        if(count[A[i]-1] === 0){
            max = i;
        }
        count[A[i]-1]++;
    }

    for(var i=0; i<count.length; i++){
        if(count[i] === 0){
            return -1;
        }
    }

    return max;
}