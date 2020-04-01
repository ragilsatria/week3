var kata = 'hello World!';

function balikKata (teks){
    var sket = '';

    for (i = kata.length-1; i >= 0; i--){
        sket += teks[i];
    }

    return sket;
}

console.log(balikKata(kata));