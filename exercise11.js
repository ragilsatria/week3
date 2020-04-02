function tentukanDeretAritmatika(arr) {
    var cek = false;
    var vad = arr[1] - arr[0];    
    
    for (i = 0; i < arr.length-1; i++){
        if (arr[i+1] === arr[i] + vad){
            // console.log(arr[i+1])
            cek = true;
        }
        else{
            return false;
        }
    }
    return cek;    
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretAritmatika([1, 3, 4, 7, 9])); // false
  console.log(tentukanDeretAritmatika([1, 3, 5, 7, 9])); // true
  console.log(tentukanDeretAritmatika([1, 3, 9])); // false