var device = navigator.userAgent.toLowerCase();
if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device)) {
    window.location = window.location.href.replace('https://nine0426.github.io/', 'https://nine0426.github.io/m.html');
} else {
    alert("欢迎")
}