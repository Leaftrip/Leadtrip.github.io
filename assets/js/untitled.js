// 获取弹窗
var modal = document.getElementById("myModal");

// 获取按钮
var btn = document.getElementById("myBtn");

// 获取 <span> 元素，用于关闭弹窗
var span = document.getElementsByClassName("close")[0];

// 点击按钮打开弹窗
btn.onclick = function() {
  modal.style.display = "block";
}

// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
  modal.style.display = "none";
}

// 点击弹窗外部，关闭弹窗
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
