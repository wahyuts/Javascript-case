function loveCalculator() {
    var nameMan = prompt("Nama Laki Laki");
    var nameGirl = prompt("Nama Wanita");
    var n = Math.random();
    n = n*100;
    n = Math.floor(n)+1;
    alert(`Selamat pasangan ${nameMan} dan ${nameGirl} mendapat percentase cinta ${n}%`);
}

loveCalculator();