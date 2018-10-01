var body = document.getElementsByTagName("body");
var parent = document.getElementById("parent");
var child = document.querySelectorAll("#child-div");
var last = document.querySelector(".child-last");
var first = document.querySelector(".first-child");
var menu = document.querySelector(".nav");
var menuItems = menu.querySelectorAll(".nav-item");

window.onload = () => {
  parent.children[0].classList.add("fadeIn");
  addClassToChildren(parent.children[0].children, "fadeIn");
  changeOpacity(parent.children[0]);
  changeActiveFields()
}

parent.onscroll = () => {
  child.forEach ( (item, index) => {

    if ((item.getBoundingClientRect().top < 600) && (item.getBoundingClientRect().top > 0)){
      findActiveField(item);
    }

    if ((item.getBoundingClientRect().top < 600) && (item.getBoundingClientRect().top > 0) && (index != 0)){
      var childrenList = item.children;
      item.classList.add("appearUp");
      addClassToChildren(childrenList, "appearUp");
      changeOpacity(item);
    }
  })
}

function findActiveField (fieldName) {
  for (var i = 0; i < menuItems.length; i++) {
    activeFieldName = fieldName.children[0].attributes[0].value.toLowerCase()
    if(activeFieldName == menuItems[i].childNodes[0].nodeValue.toLowerCase()){
      menuItems[i].classList.add("active");
    } else {
      menuItems[i].classList.remove("active");
    }
  }
}

function addClassToChildren(e, choosenclass) {
  for (var i = 0; i < e.length; i++) {
    e[i].classList.add(choosenclass);
    var newChildren = e[i].children;
    addClassToChildren(newChildren, choosenclass);
  }
}

function changeOpacity(e) {
  e.style.opacity = 1;
  removeAnimation(e,("appearUp", "fadeIn"));
}

function removeAnimation(e, choosenclass) {
  e.classList.remove(choosenclass);
}

function changeActiveFields() {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", (e) => {
      var current = document.getElementsByClassName("active");
      console.log(current[0]);
      current[0].className = current[0].className.replace("active", "");
      e.target.classList.add("active");
    });
  }
}

/*
parent.onscroll = () => {
  child.forEach( item => {
    if(item.getBoundingClientRect().top < 50){
      item.style.visibility = "hidden";
    }
    else if (item.getBoundingClientRect().top > 50 && item.getBoundingClientRect().top < screen.height * 0.65) {
      item.style.visibility = "visible";
    }
    else {
      item.style.visibility = "hidden";
    }
  })
}



parent.onscroll = () => {
  var position = item.getBoundingClientRect();
  if(position.top < 50){
    item.style.visibility = "hidden";
  }
  else if (position.top > 50 && position.top < screen.height * 0.65) {
    item.style.visibility = "visible";
  }
  else {
    item.style.visibility = "hidden";
  }
}
*/
