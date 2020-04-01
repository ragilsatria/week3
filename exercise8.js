function pasanganTerbesar(num) {
    var sNum = num.toString();
    var iNum, iNum2 = 0;
    var temp = 0;
    
    for(i = 0; i < sNum.length -1; i++){
        iNum = Number(sNum[i] + sNum[i+1])
        iNum2 = iNum;
        
        if (iNum2 > temp){
            temp = iNum2;
        }
    }
    return temp;
}
  
// pasanganTerbesar(7991829310);
//TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(592199213398)); //99