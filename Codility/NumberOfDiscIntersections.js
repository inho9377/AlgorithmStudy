// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if(A.lenght <= 1){
        return 0;
    }

    var sortedPositionArray = []

    for(var i=0; i<A.length; i++){
        sortedPositionArray.push({left:i-A[i], right:i+A[i]});
    }

    sortedPositionArray.sort((a,b) => a.left - b.left);

    var answer = 0;
    for(var i=0; i<sortedPositionArray.length; i++){

        for(var t=i+1; t<sortedPositionArray.length; t++){
            if(sortedPositionArray[i].right < sortedPositionArray[t].left){
                break;
            }
            if(answer > 10000000){
                return -1;
            }
            answer++;
        }
    }

    return answer;
}

solution([1, 5, 2, 1, 4, 0]);