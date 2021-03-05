// var value = 3; // 스칼라
// var value2 = [1,2,3]; //벡터 (스칼라 값의 조합)
// var value3 = [[1,2,3], [1,2,3]]; //행렬(matrix)
// var value4 = [3]; // 벡터
// var value5 = [[3]]; //행렬


// a = [[a[0][0], a[0][1]],
//     a[1][0], a[1][1]];


//a의 행 갯수 = b 열 갯수 여야 곱셉 가능


function solution(a, b){
    let c = [];
    const len = a.length;

    if(len === b[0].length){
        for(let i=0; i<len; i++){
            let row = [];
            for(let j=0; j<len; j++){
                let x = 0;
                for(let k=0; k<len; k++){
                    x+= a[i][k] * b[k][j];
                }
                row.push(x);
            }
            c.push(row);
        }        
        return c;
    }
    else{
        return -1;
    }

}