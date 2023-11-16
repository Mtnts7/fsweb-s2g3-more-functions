// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  if (path == "") {
    return "";
  }
  const pathArr = path.split("/");
  return pathArr[pathArr.length - 1];
}

console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(sayilar) {
  if (sayilar.length == 0) {
    return null;
  }
  let toplam = sayilar.reduce((toplam, item) => {
    return toplam + item;
  }, 0);
  /*let toplam = 0;
  sayilar.forEach(sayi => {
    toplam +=sayi;
      
  });*/
  let ortalama = toplam / sayilar.length;
  return ortalama;
}

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]
*/
const ornek = [109, 216, 288, 143, 71, 185, -278, 194, 5];
/*
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(dizi, cb_ortalamaBul) {
  const buyukSayi = [];
  const sayilar = dizi.filter((sayi) => {
    return sayi >= cb_ortalamaBul(dizi);
  });
  sayilar.map((rakam) => buyukSayi.push(rakam));
  if (dizi.length == 0) {
    return null;
  } else {
    return buyukSayi;
  }
}
// console.log(ortalamadanBuyukleriBul(ornek, ortalamaBul));
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
