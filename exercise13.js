function targetTerdekat(arr) {
    var o = 0;
    var x = [];
    var temp = 0;

    while(temp < arr.length){
        if (arr[temp] === 'o'){
            o = temp;
        }

        if (arr[temp] === 'x'){
            x.push(temp);
        }
        temp++;      
    }
    xFurthest = x[x.length-1]

    for (i = 0; i < x.length; i++){
        
        if (o < x[i]){
            return x[i] - o;
        }else if (o > xFurthest){
            return o - xFurthest;
        } 
    }
    return 0;
  }
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['x', 'x', 'x', ' ', 'o'])); //2
