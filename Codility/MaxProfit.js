//100%
function solution(A) {
    if(A.length === 0)
        return 0;
    if(A.length === 1)
        return 0;

    var result = A[1] - A[0];
    var min = A[0];
    for(var i=0; i<A.length; i++){
        if(A[i] < min){
            min = A[i];
        }

        if(result < A[i] - min){
            result = A[i] - min;
        }
    }

    return result;
}
