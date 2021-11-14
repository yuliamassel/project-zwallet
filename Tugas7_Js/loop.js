let mtk = 80
let bahasaIndonesia = 90
let bahasaInggris = 85
let ipa = 70

let totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa
let rataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
const validasi =(rataNilai) => {
    if (rataNilai>= 90 && rataNilai <= 100){hasil = 'A'
    
    }else if (rataNilai>= 80 && rataNilai <= 89){hasil = 'B'
    
    }else if(rataNilai>= 70 && rataNilai <= 79){hasil = 'C'

    }else if(rataNilai>= 60 && rataNilai <= 69){hasil = 'E'

    }
    return hasil;
}

console.log(validasi(rataNilai))