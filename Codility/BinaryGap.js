function solution(N) {
    var bin = N.toString(2);

    var answer=0;
    var count=0;
    for(var i=0; i<bin.length; i++){
        if(bin[i] === '1'){
            if(answer < count){
                answer = count;
            }
            count=0;
        }
        else{
            count++;
        }
    }

    return answer;
}
