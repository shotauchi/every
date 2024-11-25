let mon1 = 'July';
let mon2 = 'August';
let mon3 = 'September';
let mon4 = 'October';

if (mon1 == mon2) {
    console.log(true);
}else if (mon3 === mon4) {
    console.log(false);
}else if (mon1 == mon2 && mon3 == mon4) {
    console.log(true);
}else {
    console.log(mon1); //JUlyを出力する。
}