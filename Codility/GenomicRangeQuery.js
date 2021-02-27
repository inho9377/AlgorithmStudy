function solution(S, P, Q) {
    var answer = [];

    var ones=[0];
    var twos=[0];
    var threes=[0];
    var fours=[0];
    for(var i=1; i<S.length+1; i++){
        ones[i] = ones[i-1];
        twos[i] = twos[i-1];
        threes[i] = threes[i-1];
        fours[i] = fours[i-1];
        if(S[i-1] === 'A'){
            ones[i]++;
        }
        else if(S[i-1] === 'C'){
            twos[i]++;
        }
        else if(S[i-1] === 'G'){
            threes[i]++;
        }
        else{
            fours[i]++;
        }
    }

    for(var i=0; i<P.length; i++){
        const start = P[i]+1;
        const end = Q[i]+1;

        if((ones[end] - ones[start-1])>0){
            answer.push(1);
        }
        else if((twos[end] - twos[start-1])>0){
            answer.push(2);
        }
        else if((threes[end] - threes[start-1])>0){
            answer.push(3);
        }
        else{
            answer.push(4);
        }
    }

    return answer;
}
