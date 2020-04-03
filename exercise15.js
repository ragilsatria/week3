function groupAnimals(animals) {
  var hDex = 'abcdefghijklmnopqrstuvwxyz';
  var grup = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  var final = [];
  var j = 0;

  for (i = 0; i < animals.length; i++){
    // console.log(i);
    j = 0;    
    
    while (animals[i][0] != hDex[j]){ 
      j++;

    }
    grup[j].push(animals[i]);  
  
  }
  j = 0;
  // console.log(grup);
  
  while (j < grup.length){
    if(grup[j].length != 0){
        final.push(grup[j]);

    }
    j++;

  }
  return final;
  
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam','burung', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]