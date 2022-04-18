"use strict";
const target = document.querySelector(".target");
const coordCon = document.querySelector(".coordinates");
const coordY = document.querySelector(".coord_Y");
const coordX = document.querySelector(".coord_X");

// 마우스 이벤트

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  target.style.top = y + "px";
  target.style.left = x + "px";
  coordCon.style.top = y + "px";
  coordCon.style.left = x + "px";
  coordX.style.top = y + "px";
  coordY.style.left = x + "px";
  coordCon.innerHTML = `${x}px , ${y}px`;
});
