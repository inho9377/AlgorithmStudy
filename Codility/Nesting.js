function solution(S) {

    var startCount = 0;
    for(var i=0; i<S.length; i++){
        if(S[i] === ')'){
            if(startCount === 0){
                return 0;
            }

            startCount--;
        }
        else{
            startCount++;
        }
    }

    return startCount === 0? 1 : 0;

}
