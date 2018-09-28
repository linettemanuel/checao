var body=document.getElementsByTagName("body");
var parent=document.getElementById("parent");
var child=document.querySelectorAll("#child-div");
var last = document.querySelector(".child-last");

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
