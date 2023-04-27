// 次々出現
function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; 
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); 

// 文字をふわっと

var container = $(".mainTxt");
var speed = 80;
var content = container.html();
var text = $.trim(content);
var newHtml = "";

text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});
container.html(newHtml);
var txtNum = 0;
container.css({opacity: 1});
setInterval(function() {
  container.find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);
