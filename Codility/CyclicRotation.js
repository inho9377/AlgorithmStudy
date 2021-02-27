function solution(A, K) {
    if(K === 0){
        return A;
    }
    const moveIndex = (K % A.length);
    if(moveIndex === 0){
        return A;
    }

    var origin = A.slice();
    for(var i=0; i<A.length; i++){
        A[i] = origin[(A.length - moveIndex + i) % A.length];
    }       

    return A;
}

solution([3, 8, 9, 7, 6], 3);