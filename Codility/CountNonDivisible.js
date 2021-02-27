function solution(A) {
    if(A.length === 1){
        return [0];
    }
    
    var numCount = new Array(A.length*2+1).fill(0);

    for(var i=0; i<A.length; i++){
        numCount[A[i]]++;
    }

    var divCount = [];
    
    for(var i=0; i<A.length; i++){
        let divisors = 0;

        for(var j=1; j*j<=A[i]; j++){
            if(A[i] % j === 0){
                divisors += numCount[j];
                if((A[i] / j) != j){
                    divisors += numCount[A[i]/j];
                }
            }
        }
        divCount.push(A.length - divisors);
    }

    return divCount;



    // if(A.lenght === 1){
    //     return [1];
    // }
    
    // var answer = [];
    // for(var i=0; i<A.length; i++){
    //     var inCount=0;
    //     for(var t=0; t<A.length; t++){
    //         if(t === i){
    //             continue;
    //         }
    //         if(A[i] % A[t] != 0){
    //             inCount++;
    //         }
    //     }
    //     answer.push(inCount);
    // }
    // return answer;
}
solution([3, 1, 2, 3, 6]);

function getTotalDivisor(N) {
    if(N === 0){
        return 0;
    }
    if(N === 1){
        return 1;
    }

    var answer = 0;
    var sqrtN = Math.sqrt(N);
    sqrtN = Math.ceil(sqrtN);
    var powValue = Math.pow(sqrtN, 2);
    if(N === powValue){
        answer++;
    }

    for(var i=0; i<sqrtN; i++){
        if(N % i === 0){
            answer += 2;
        }
    }

    return answer;
}
