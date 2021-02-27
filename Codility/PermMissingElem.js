function solution(A) {
    if(!A || A.length === 0){
        return 0;
    }

    var count = new Array(A.length).fill(0);
    for(var i=0; i<A.length; i++){
        count[A[i]-1] = 1;
    }

    for(var i=0; i<count.length; i++){
        if(count[i] === 0){
            return i+1;
        }
    }

    return A.length+1;
}
