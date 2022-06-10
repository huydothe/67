function money() {
    let a = +document.getElementById('amount').value;
    if (a <= 4000) {
        document.getElementById('money').innerHTML='Số tiền hoa hồng của bạn là' + ((a*5)/100);
    }else if(a>4000 && a<=12000){
        document.getElementById('money').innerHTML='Số tiền hoa hồng của bạn là' + (200 + ((a-4000)*10)/100);
    }else {
        document.getElementById('money').innerHTML='Số tiền hoa hồng của bạn là' + (1000 + ((a-12000)*20)/100);
    }
}