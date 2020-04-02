function tentukanDeretGeometri(arr) {
    var cek = false;
    var vad = arr[1] / arr[0];
    
    for (i = 0; i < arr.length-1; i++){
        if (arr[i+1] === arr[i]*vad){
            cek = true;
            // console.log(arr[i+1] + ' ' + cek)
        }
        else{
            return false;
        }
    } 
    return cek;  
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([1, 3, 9, 36])); // false
console.log(tentukanDeretGeometri([8, 16, 32, 64, 128, 256, 512])); // true