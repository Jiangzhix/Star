var starCount = 1500;
var starArr = new Array();

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

    setTimeout("showStars()", 100);
}