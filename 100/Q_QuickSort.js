//pivot을 사용함

function QuickSort(A){
    let len = A.length;

    if(len <= 1){
        return A;
    }

    let pivot = [A.shift()];
    let oneGroup = [];
    let twoGroup = [];

    for (let i in A){
        if(A[i] < pivot){
            oneGroup.push(A[i]);
        }
        else{
            twoGroup.push(A[i]);
        }
    }

    console.log('그룹하나 : ${oneGroup}\n rmfnqenf: ${twoGroup}\n 피벗값 : ${pivot}');


    return QuickSort(oneGroup).concat(pivot, QuickSort(twoGroup));
}