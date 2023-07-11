var starCount = 1500;
var starArr = new Array();
var hellotip = new String();

hellotip = getNEMTtip()

var Star = function () {
    this.x = windowWidth * Math.random();
    this.y = 5000 * Math.random();
    this.text = ".";
    this.color = "white";
    this.randomColor = function () {
        var _r = Math.random();
        if (_r < 0.5) {
            this.color = "#333";
        } else {
            this.color = "white";
        }
    }
}

window.onload = function () {
    var starsE = document.getElementById("stars");
    windowWidth = window.innerWidth;
    starsE.width = windowWidth;
    starsE.height = window.innerHeight;
    context = starsE.getContext("2d");

    for (var i = 0; i < starCount; i++) {
        var star = new Star();
        star.randomColor();
        starArr.push(star);
    }

    showStars();
}

function showStars() {
    for (var n = 0; n < starCount; n++) {
        starArr[n].randomColor();
        context.fillStyle = starArr[n].color;
        context.fillText(starArr[n].text, starArr[n].x, starArr[n].y);
    }

    setTimeout("showStars()", 150);
}

function getNEMTtip() {
    var date1 = '06/06/2024';
    var date2 = new Date();
    var date3 = date2.getTime() - new Date(date1).getTime();
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    var leave1 = date3 % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    var str = new String();
    return "距离高考还有" + Math.abs(days) + "天" + Math.abs(hours) + "时" + Math.abs(minutes) + "分"
}