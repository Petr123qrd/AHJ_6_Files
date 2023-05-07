import Manager from "./Manager";

const cardManager = new Manager();

cardManager.bindToDOM(document.querySelector(".container"));
