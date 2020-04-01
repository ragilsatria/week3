function angkaPalindrome(num) {
   
   
   if (num >= 0 && num <9){
       return num+1;
   }
   else {
        var cek = true;
        num++;

        while (cek){
            var num1 = num;
            var sNum = num1.toString();
            var temp = '';
        
            for (i = sNum.length-1; i >= 0; i--){
                 temp += sNum[i];           
            }
            
            if (sNum == temp){
                return temp;
            }
            
        num++;
        }
   }
}

//  TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(12321)); // 12321  
console.log(angkaPalindrome(99));
