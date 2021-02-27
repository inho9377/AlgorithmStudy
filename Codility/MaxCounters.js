function solution(N, A) {
    var max=0;
    var answer = new Array(N).fill(0);
    var applyMax =0;
    for(var i=0; i<A.length; i++){
        if(A[i] === N+1){
            applyMax = max;
        }
        else{
            if(answer[A[i]-1] < applyMax){
                answer[A[i]-1] = applyMax;
            }
            answer[A[i]-1]++;
            if(answer[A[i]-1] > max){
                max = answer[A[i]-1];
            }
        }
    }

    for(var i=0; i<answer.length; i++){
        if(answer[i] < applyMax){
            answer[i] = applyMax;
        }
    }

    return answer;
}