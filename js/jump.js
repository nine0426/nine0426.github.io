var device = navigator.userAgent.toLowerCase();
var ua = navigator.userAgent.toLowerCase();

if (ua.match(/MicroMessenger/i) == "micromessenger") {
    //在微信中打开
    window.location = window.location.href.replace('https://nine0426.github.io/', 'https://nine0426.github.io/wx.html');
}else if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device)) {
    window.location = window.location.href.replace('https://nine0426.github.io/', 'https://nine0426.github.io/m.html');
}