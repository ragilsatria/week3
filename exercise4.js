var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    arr.splice(1, 1, "Roman Alamsyah Elsharawy");
    arr.splice(2, 1, "Provinsi Bandar Lampung");
    arr.splice(4, 0, "Pria");
    arr.splice(5, 1, "SMA Internasional Metro");
    console.log(arr);

    var date = arr[3].split('/');
    var bulan = Number(date[1]);

    switch (bulan){
        case 1: bulan = 'Januari'; break;
        case 2: bulan = 'Februari'; break;
        case 3: bulan = 'Maret'; break;
        case 4: bulan = 'April'; break;
        case 5: bulan = 'Mei'; break;
        case 6: bulan = 'Juni'; break;
        case 7: bulan = 'Juli'; break;
        case 8: bulan = 'Agustus'; break;
        case 9: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
        default:  bulan = 'invalid';
    }
    console.log(bulan);

    date.sort(function(value1, value2) { return value2 - value1 });
    19
    console.log(date); 
    
    var aDate = arr[3].split('/');
    joinDate = aDate.join('-');
    console.log(joinDate);

    var nama = arr[1];
    console.log(nama.slice(0, 15));    
}

dataHandling2(input);
