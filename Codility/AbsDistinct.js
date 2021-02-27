function solution(A) {
    
    let count = new Set();
    for(var i=0; i<A.length; i++){
        count.add(Math.abs(A[i]));
    }

    return count.size;

}
