


let l = [];
//아스키코드
for( let i = 65; i < 91; i++){
    l.push(String.fromCharCode(i));
}
//A~Z까지 들어간 배열

function randomItem(a){
    let string = [];

    while( string.length !== 8){
        let b = a[Math.floor(Math.random()*a.length)]; //a.length까지의 랜덤숫자
        if(!string.includes(b)){
            string.push(b);
        }
    }
    //8개 무작위한 string 생성



    let medicine = string.join('');
    return medicine;
}


let total_medicine = [];

while( string.length !== 100){
    let m = randomItem(l);
    if(!total_medicine.includes(m)){
        total_medicine.push(m);
    }
}

let result = [];
let input = 'ABCEDFGH';
let size = 4;

for(let i of total_medicine){
    let setUserData = new Set(input);
    let setMedicine = new Set(i);

    let intersction = new Set([...setUserData].fillter(x => setMedicine.has(x)));

    if(intersction.size === size){
        result.push(i);
    }
}