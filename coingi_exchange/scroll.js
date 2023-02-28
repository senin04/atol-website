const wtf = parseInt(localStorage.getItem("scroll-position") || 0)
setTimeout(() => {
  window.scrollTo(0,wtf)
}, 250);
window.addEventListener("scroll", function () {
  localStorage.setItem("scroll-position", window.scrollY)
});