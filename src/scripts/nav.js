// get the burger icon element from DOM
import { toggleMenuEventListener } from "./eventListener";

export const nav = function () {
  var burger = document.querySelector(".image-burger");
  burger.addEventListener("click", toggleMenuEventListener);
};
