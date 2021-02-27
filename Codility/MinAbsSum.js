function solution(A) {
    A = A.map(a=>Math.abs(a));

    A.sort((a,b) => b-a);

    let total = 0;
    // for(var i=0; i<A.length; i++){
    //     total += A[i];
    // }

    for(var i=0 ; i<A.length; i++){
        const minusValue = Math.abs(total - A[i]);
        const plusValue = Math.abs(total + A[i]);
        if(minusValue > plusValue){
            total += A[i];
        }
        else{
            total -= A[i];
        }
    }
    return Math.abs(total);
}

solution([-1000, 1, 1, 100]);