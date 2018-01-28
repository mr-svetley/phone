var phoneWidget = (function(){
  
  var widget = document.querySelector('#phone-widget');
  var widget = document.querySelector('body'); /*Для презентации блоков, по завершению разработки удалить*/
  
  var scrollerWrapper = widget.querySelectorAll('.js-pw-scroller-wrapper');
  var scroller;
  
  for (var i = 0; i < scrollerWrapper.length; i++) {
    
    scroller = scrollerWrapper[i].querySelector('.js-pw-scroller-wrapper > .js-pw-scroller');
    
    if ( scroller ) {
      scrollerWrapper[i].style.overflowX = 'hidden';
      scroller.style.width = scrollerWrapper[i].clientWidth + ( scroller.offsetWidth - scroller.clientWidth  ) + 'px';
    }
  }

  scrollerWrapper = null;
  scroller = null;

  return false;
})();