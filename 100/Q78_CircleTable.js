function solution(N, K){
    let nArr = [];
    for(var i=0; i<N; i++){
        nArr[i] = i+1;
    }

    let index = 0;
    while(nArr.length > 2){
        if(index > nArr.length -1){
            index -= nArr.length;
        }
        nArr.splice(index, 1);
        index += K;
    }   
    
    return nArr;
}