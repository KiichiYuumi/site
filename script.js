  "use strict";
  //id tate scroll
const boxes = document.querySelectorAll('.tate');

boxes.forEach((box) => {
  box.addEventListener('wheel', (e) => {
    e.preventDefault();
    box.scrollLeft -= e.deltaY;
  }, { passive: false });
});

  //id tateNB scroll
const boxesNB = document.querySelectorAll('.tateNB');

boxesNB.forEach((box) => {
  box.addEventListener('wheel', (e) => {
    e.preventDefault();
    box.scrollLeft -= e.deltaY;
  }, { passive: false });
});