

function solution(A){

    let answer = [];
    for(let i=0; i<A.length; i++){
        answer.push(Math.min.apply(null, A)); //A에서 가장 작은 값
        A.splice(A.indexOf((Math.min.apply(null, A)), 1);
    }
}