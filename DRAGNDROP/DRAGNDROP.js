'use strict';

let box = document.getElementById('box');
let images = box.getElementsByTagName('img');
let offsetX, offsetY;

  for (let i = images.length-1; i >=0; i--){
    images[i].style.top = images.offsetTop +'px';
    images[i].style.left = images[i].offsetLeft+'px';
    images[i].style.position = 'absolute';
    images[i].onmousedown = function (event) {
      offsetX = event.offsetX;
      offsetY = event.offsetY;
      event = event || window.event;
      event.preventDefault();
      let pict = event.currentTarget;
      document.body.appendChild(pict);

      function onMouseMove(event) {
        pict.style.left = event.pageX - offsetX +'px';
        pict.style.top = event.pageY - offsetY + 'px';
        pict.style.cursor = 'pointer';
      }

      document.addEventListener('mousemove', onMouseMove);
      pict.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pict.onmouseup = null;
      };
    };
  }
