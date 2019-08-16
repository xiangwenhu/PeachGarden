const musicEl = document.getElementById("music");

const sources = [
    './music/城市休闲愉快轻松钢琴拍手.mp3',
    './music/可爱风格笛子鼓混合背景乐.mp3'
]


function getRandomIndex(len){
    return ~~(Math.random() * len) 
}

musicEl.onended = function(){
    const index = getRandomIndex(sources.length);
    musicEl.src =  sources[index];
}