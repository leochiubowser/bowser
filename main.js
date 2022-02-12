var long = prompt("操場長度");
var plus = prompt("增加一道的增加長度");
var round = prompt("跑了幾圈");
long = Number(long);
plus = Number(plus);
round = Number(round);
var plus_how_many = 0;
for (let i = 1; i < round; i++) {
    plus_how_many = plus_how_many + i
}
var anwser = long * round + plus_how_many * plus;
document.write("你跑的距離是" + anwser + "m");