function solution(A, B) {

    const length = A.length;
    if(length === 0){
        return 0;
    }

    var answer = 1;
    var currentRight = B[0];
    for(var i=1; i<length; i++){
        if(A[i] > currentRight){
            answer++;
            currentRight = B[i];
        }
    }


    return answer;
}
