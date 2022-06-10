function money() {
    let a = +document.getElementById('minutes').value;
    if (a >= 0 && a <= 50) {
        document.getElementById('result').innerHTML = 'số tiền cần trả là' + (25000 + 600 * a) + 'VND';
    } else if (a > 50 && a <= 150) {
        document.getElementById('result').innerHTML = 'số tiền cần trả là' + (55000 + 400 * (a - 50)) + 'VND';
    } else if (a>150 && a){
        document.getElementById('result').innerHTML='số tiền cần trả là' + (115000 + 400*(a-200)) + 'VND';
    }
}