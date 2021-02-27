function solution(A) {

    var count = new Map();

    for(var i=0; i<A.length; i++){
        if(count.has(A[i])){
            count.set(A[i], count[A[i]]+1);
        }
        else{
            count.set(A[i], 1);
        }
    }

    var answer = [];
    for(let [key, value] of count){
        if(value < (A.length / 2)){
            answer.push(key);
        }
    }



    return answer.length === 0? -1 : answer[0];
}

solution([3, 4, 3, 2, 3, -1, 3, 3]);

// function solution(A) {
//     var count = {};
//     for(var i=0; i<A.length; i++){
//         if(A[i] in count === false){
//             count[A[i]]=0;
//         }
//         count[A[i]]++;
//     }

//     var maxValue;
//     for(var key in count){
//         if(!maxValue || maxValue < count[key]){
//             maxValue = key;
//         }
//     }

//     var count = 0;
//     var answer = 0;
//     for(var i=0; i<A.length; i++){
//         if(A[i] == maxValue){
//             answer = i;
//             count++;
//         }
//     }

//     return count <= A.length/2 ? -1 : answer;

// }