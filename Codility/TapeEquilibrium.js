function solution(A) {
    var sum=[A[0]];
    var sumRe=[A[A.length-1]];
    for(var i=1; i<A.length; i++){
        sum.push(sum[i-1] + A[i]);
        sumRe.push(sumRe[i-1] + A[A.length-i-1]);
    }

    var answer=200000;
    for(var i=0; i<sum.length; i++){
        const val = Math.abs(sum[i] - sumRe[sum.length-i-2]);
        if(answer> val){
            answer = val;
        }
    }

    return answer;

}


solution( [3, 1, 2, 4, 3]);