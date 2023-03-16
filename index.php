<?php
$conf['qqjump']=1;if(strpos($_SERVER['HTTP_USER_AGENT'], 'QQ/')||strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')!==false && $conf['qqjump']==1){$siteurl='http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];echo '<html>
<head>
    <meta charset="UTF-8">
    <title>使用浏览器打开</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta name="format-detection" content="telephone=no">
    <meta content="false" name="twcClient" id="twcClient">
    <meta name="aplus-touch" content="1">
    <style>
		body,html{width:100%;height:100%}
		*{margin:0;padding:0}
		body{background-color:#fff}
        #browser img{
        	width:50px;
        }
        #browser{
        	margin: 0px 10px;
            text-align:center;
        }
        #contens{
            font-weight: bold;
            margin:-285px 0px 10px;
            text-align:center;
            font-size:20px;
            margin-bottom: 125px;
        }
		.top-bar-guidance{font-size:15px;color:#fff;height:70%;line-height:1.8;padding-left:20px;padding-top:20px;background:url(https://img.alicdn.com/imgextra/i3/2200638895580/O1CN01awiCFw1r5gfyRJf65_!!2200638895580.png) center top/contain no-repeat}
		.top-bar-guidance .icon-safari{width:25px;height:25px;vertical-align:middle;margin:0 .2em}
		.app-download-tip{margin:0 auto;width:290px;text-align:center;font-size:15px;color:#2466f4;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcAQMAAACak0ePAAAABlBMVEUAAAAdYfh+GakkAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjwA8acEkAAAy4AIE4hQq/AAAAAElFTkSuQmCC) left center/auto 15px repeat-x}
		.app-download-tip .guidance-desc{background-color:#fff;padding:0 5px}
		.app-download-btn{display:block;width:214px;height:40px;line-height:40px;margin:18px auto 0 auto;text-align:center;font-size:18px;color:#2466f4;border-radius:20px;border:.5px #2466f4 solid;text-decoration:none}
    </style>
</head>
<body>
<div class="top-bar-guidance">
    <p>点击右上角<img src="https://img.alicdn.com/imgextra/i2/2200638895580/O1CN01J075bE1r5gfxMmNsC_!!2200638895580.png" class="icon-safari"> <span id="openm">Safari打开</span></p>
    <p>可以继续浏览本站哦~</p>
</div>
<a  href="" id="vurl" rel="noreferrer"></a>
<div id="contens">
1.防止腾讯屏蔽本站链接<br /><br />
2.建议用QQ浏览器打开效果最佳<br /><br />
</div>
<div id="browser">
    <a href="mttbrowser://url='. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i4/2200638895580/O1CN01SBZzOC1r5gfz7u3eK_!!2200638895580.jpg"></img></a>
    <a href="googlechrome://browse?url='. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i4/2200638895580/O1CN01uKAjcC1r5gfz7seNT_!!2200638895580.jpg"></img></a>
    <a href="alipays://platformapi/startapp?appId=20000067&url='. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i1/2200638895580/O1CN01G9a7yA1r5gg1mAd2Y_!!2200638895580.jpg"></img></a>
    <a href="googlechrome://browse?url='. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i4/2200638895580/O1CN01gz5cpy1r5gg1mE3BZ_!!2200638895580.jpg"></img></a>
    <a href="ucbrowser://'. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i1/2200638895580/O1CN01pr5nFD1r5gg1mCExu_!!2200638895580.jpg"></img></a>
    <a href="bdbrowser://'. $siteurl .'"><img src="https://img.alicdn.com/imgextra/i3/2200638895580/O1CN01S19hGm1r5gg0JUWIU_!!2200638895580.jpg_160x160.jpg?t=1602614222000"></img></a>
</div>
<div class="app-download-tip">
    <span class="guidance-desc">点击上方图标or复制本站网址自行打开</span>
</div>
 <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
<a data-clipboard-text="'.$siteurl.'" class="app-download-btn">点此复制本站网址</a>
<script type="text/javascript">
  new ClipboardJS(".app-download-btn");
  $(".app-download-btn").click(function() {
layer.tips("复制成功，么么哒", ".app-download-btn", {
  tips: [3, "rgb(38,111,250)"],
  time:500
});})
</script>
<script>
function openu(u){
document.getElementById("vurl").href= u;
document.getElementById("vurl").click();
}
var url = window.location.href;
	if(navigator.userAgent.indexOf("QQ/")> -1){
		openu("ucbrowser://"+url);
		openu("mttbrowser://url="+url);
		openu("baiduboxapp://browse?url="+url);
		openu("googlechrome://browse?url="+url);
		openu("mibrowser:"+url);
        openu("taobao://"+url.split("://")[1]);
        openu("alipays://platformapi/startapp?appId=20000067&url="+url);
		$("html").on("click",function(){
			openu("ucbrowser://"+url);
			openu("mttbrowser://url="+url);
			openu("baiduboxapp://browse?url="+url);
			openu("googlechrome://browse?url="+url);
			openu("mibrowser:"+url);
			openu("taobao://"+url.split("://")[1]);
            openu("alipays://platformapi/startapp?appId=20000067&url="+url);
		});
	}else if(navigator.userAgent.indexOf("MicroMessenger") > -1){
		if(navigator.userAgent.indexOf("Android") > -1){
			var iframe = document.createElement("iframe");
			iframe.style.display = "none";
			document.body.appendChild(iframe);
		}else{
        }
	}
</script>
</html>';exit; } ?>