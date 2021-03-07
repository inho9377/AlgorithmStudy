function MergeSort(A){
    let length = A.length;
    let result = [];

    if(length <= 1){
        return A;
    }
    let mid = parseInt(length / 2);

    //divide
    let oneGroup = MergeSort(A.slice(0, mid));
    let twoGroup = MergeSort(A.slice(mid));

    //conquer
    while(oneGroup.length !== 0 && twoGroup.length !== 0){
        if(oneGroup[0] < twoGroup[0]){
            result.push(oneGroup.shift());
        }
        else{
            result.push(twoGroup.shift());
        }
    }

    while(oneGroup.length !== 0){
        result.push(oneGroup.shift());
    }


    while(twoGroup.length !== 0){
        result.push(twoGroup.shift());
    }

    return result;
}

