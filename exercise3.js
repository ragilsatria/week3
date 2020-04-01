var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
    ["0005", "Yusuf Senja", "Jakarta", "19/12/1997", "Balapan"],
    ["0007", "Jamse Donb", "London", "07/07/1007", "Onar"]
];

function dataHandling(arr){
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            // console.log(i, j);
            switch(j){
                case 0:
                    console.log(`Nomor ID: ${arr[i][j]}`);
                    break;
                case 1:
                    console.log(`Nama Lengkap: ${arr[i][j]}`);
                    break;
                case 2:
                    console.log(`TTL: ${arr[i][j]} ${arr[i][j+1]}`);
                    j++;
                    break;
                case 3:
                    console.log(`TTL: ${arr[i][j]}`); //skipped
                    break;
                case 4:
                    console.log(`Hobby: ${arr[i][j]}`);
                    break;
                default:
                    console.log('error : input kelebihan');    
            }
        }
        console.log();
    }
}

dataHandling(input);