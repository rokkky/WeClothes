const topInner = document.querySelector('.welcome .clothes__inner.top'),
      topItems = document.querySelectorAll('.welcome .clothes__item.top'),
      midInner = document.querySelector('.welcome .clothes__inner.mid'),
      midItems = document.querySelectorAll('.welcome .clothes__item.mid'),
      botInner = document.querySelector('.welcome .clothes__inner.bot'),
      botItems = document.querySelectorAll('.welcome .clothes__item.bot');
let itemWidth = 261.99,
    offset,
    width;


  function scroll (items) {
    width = (items.length - 1) * parseInt(window.getComputedStyle(items[0]).width),
    offset = 0;
    /* setInterval(() => {
      if (offset >= (width - itemWidth)) {
        offset = 0;
        inner.style.transform = `translateX(${-offset}px)`;
      }
      else {
        offset += itemWidth;
        inner.style.transform = `translateX(${-offset}px)`;
      }
    }, 2000);  */
    intervalScroll(topInner);
  }

  scroll(topItems);

/*   setTimeout(() => {
    
  }, timeout); */

  function intervalScroll(inner) {
    if (offset >= (width - itemWidth)) {
      offset = 0;
      inner.style.transform = `translateX(${-offset}px)`;
    }
    else {
      offset += itemWidth;
      inner.style.transform = `translateX(${-offset}px)`;
    }
    setTimeout(() => {
      intervalScroll(inner)
    }, 2000);
  }