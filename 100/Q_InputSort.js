

function solution(A){

    let answer = [];
    let len = A.length;
    for(let i=0; i<len; i++){
        let input = A.shift();
        let index = getIndex(answer, input);
        A.splice(index, 0, input);
    }
}


function getIndex(A, input){
    for(let i in A){
        if(input < A[i]){
            return i;
        }
    }

    return A.length;
}