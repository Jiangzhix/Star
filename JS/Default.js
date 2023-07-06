var canvas;
var stars_count;
var stars;

ini();
SummonStars();

var interval = setInterval(function(){drawStars();},50);

// 初始化
function ini() {
    canvas = document.getElementById("Star_background");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d")
    stars = Array();
    stars_count = 50;
    clearInterval(interval);
}

// 生成星星
function SummonStars() {
    for(var i = 0 ; i < stars_count ; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight;
        let radius = Math.random() * 0.8;
        let color = "rgba(255,255,255)"
        let speed = Math.random() * 0.5
        let arr = {'x':x,'y':y,'radius':radius,'color':color,'speed':speed}
    }
}


var starbg = document.getElementById("Star_background")
