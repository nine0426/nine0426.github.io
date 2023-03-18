// 获取用户IP地址
function getIP() {
  return fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => data.ip)
}

// 查询IP地址归属地信息
function getIpLocation(ip) {
  return fetch(`https://ip.taobao.com/outGetIpInfo?ip=${ip}&accessKey=alibaba-inc`)
    .then(res => res.json())
    .then(data => data.data)
}

// 判断是否为中国大陆IP
async function isMainlandIp() {
  const ip = await getIP()
  const location = await getIpLocation(ip)
  return location.country_id === 'CN'
}

// 根据IP地址加载不同的CSS文件
async function loadCss() {
  const isMainland = await isMainlandIp()
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  if (isMainland) {
    link.href = './css/style.css'
  } else {
    link.href = './css/other.css'
  }
  document.head.appendChild(link)
}

loadCss()
