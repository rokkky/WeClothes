const topInner = document.querySelector('.welcome .clothes__inner.top'),
      topItems = document.querySelectorAll('.welcome .clothes__item.top'),
      midInner = document.querySelector('.welcome .clothes__inner.mid'),
      midItems = document.querySelectorAll('.welcome .clothes__item.mid'),
      botInner = document.querySelector('.welcome .clothes__inner.bot'),
      botItems = document.querySelectorAll('.welcome .clothes__item.bot');
let itemWidth = 261.99,
    topOffset = [0],
    midOffset = [0],
    botOffset = [0];


function scroll (items, inner, offset) {
  let width = (items.length - 1) * parseInt(window.getComputedStyle(items[0]).width);
  if (offset[0] >= (width - itemWidth)) {
    offset[0] = 0;
    inner.style.transform = `translateX(${-offset[0]}px)`;
  } else {
    offset[0] += itemWidth;
    inner.style.transform = `translateX(${-(offset[0])}px)`;
  }
}

setInterval(scroll, 1800, topItems, topInner, topOffset);
setInterval(scroll, 2800, botItems, botInner, botOffset);
setInterval(scroll, 3700, midItems, midInner, midOffset);
