function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),

    new Soru("2-JavaScript'te === operatörü neyi kontrol eder?", { a: "İki değerin sadece değerlerini kontrol eder.", b: "İki değerin değerlerini ve türlerini kontrol eder.", c: "İki değerin sadece türlerini kontrol eder.", d: "İki değerin referanslarını kontrol eder." }, "b"),

    new Soru("3-JavaScript'te let ve const arasındaki fark nedir?", { a: " let değişkenleri yeniden atanabilirken, const değişkenleri yeniden atanamaz.", b: "let değişkenleri fonksiyon kapsamına sahipken, const değişkenleri blok kapsamına sahiptir.", c: "let sadece sayısal değerlerde kullanılabilirken, const herhangi bir değerde kullanılabilir.", d: "Her ikisi de değişken tanımlamak için kullanılır, farkları yoktur." }, "a"),
    
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),

    new Soru("4-JavaScript'te NaN ne anlama gelir?", { a: "Not a Number'ın kısaltmasıdır ve sayı olmayan değerleri temsil eder.", b: "Null and None'ın kısaltmasıdır ve null veya undefined değerleri temsil eder.", c: "New Array'ın kısaltmasıdır ve yeni bir dizi oluşturur.", d: "Next Action Needed'ın kısaltmasıdır ve bir sonraki işlemi temsil eder..net" }, "a"),

    new Soru("4-JavaScript'te setTimeout() fonksiyonu ne işe yarar?", { a: "Bir metin dizisini belirli bir süre içinde ekrana yazdırmak için kullanılır.", b: "Bir döngüyü belirli bir süre boyunca duraklatmak için kullanılır.", c: "Bir diziye belirli bir süre aralıklarla eleman eklemek için kullanılır.", d: "Belirli bir süre sonra bir fonksiyonu çağırmak için kullanılır." }, "d"),
];


