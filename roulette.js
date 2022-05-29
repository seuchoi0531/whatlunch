//document.body.style.overflow = "hidden";
var menuArray = new Array();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colorData = document.createElement("input");
colorData.type = "file";
colorData.accept = "src/color.txt";
function main(){
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function readColor(){
    var reader = new FileReader();
    reader.readAsText(colorData[0], "euc-kr");
}