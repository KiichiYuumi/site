  "use strict";
  console.log('enabled');

  //id tate scroll
const boxes = document.querySelectorAll('.tate');

boxes.forEach((box) => {
  box.addEventListener('wheel', (e) => {
    e.preventDefault();
    box.scrollLeft -= e.deltaY;
  }, { passive: false });
});