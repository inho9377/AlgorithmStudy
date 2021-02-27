function solution(N) {
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

solution(24);