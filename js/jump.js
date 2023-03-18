var device = navigator.userAgent.toLowerCase();
var ua = navigator.userAgent.toLowerCase();

if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    window.location.href = "https://nine0426.github.io/wx.html"
} else if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "https://nine0426.github.io/m.html";
} else {
    console.log("hh")
}