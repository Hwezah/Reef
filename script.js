"use strict";

const navOpen = document.querySelector(".open-nav");
const navClose = document.querySelector(".close-nav");
const navigation = document.querySelector(".nav-main");

navOpen.addEventListener("click", () => {
  navigation.classList.add("open");
});

navClose.addEventListener("click", () => {
  navigation.classList.remove("open");
});
