"use strict";
const target = document.querySelector(".target");
const coordCon = document.querySelector(".coordinates");
const coordY = document.querySelector(".coord_Y");
const coordX = document.querySelector(".coord_X");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

// 마우스 이벤트

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  coordX.style.transform = `translateX(${x}px)`;
  coordY.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${
    y - targetHalfWidth
  }px)`;
  coordCon.style.transform = `translate(${x}px, ${y}px)`;
  coordCon.innerHTML = `${x}px , ${y}px`;
});
