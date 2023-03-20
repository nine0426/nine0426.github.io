// 禁止选择文本
document.body.style.userSelect = 'none';

// 禁止拖拽元素
document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

// 禁止复制
document.addEventListener('copy', function(e) {
  e.preventDefault();
  alert("禁止复制！");
});

// 禁止鼠标右键
document.oncontextmenu = function () {
  return false;
};