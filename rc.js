var urls = [
    "cameraid1111.html",
    "cameraid1211.html",
    "cameraid1221.html",
    "cameraid2231.html",
    "cameraid3001.html",
    "cameraid2036.html",
];
document.getElementById("random-link").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)]
  this.href = url;
});