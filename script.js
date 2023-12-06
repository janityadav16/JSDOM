function css() {
  let container = document.getElementById("container");

  if (container.style.height == "400px") {
    container.style.height = "1000px";
    container.style.width = "1000px";
    container.style.color = "yellow";
    container.style.background = "blue";
  } else {
    container.style.height = "400px";
    container.style.width = "400px";
    container.style.color = "white";
    container.style.background = "black";
  }

}

function bulb() {
  let bulb = document.getElementById("bulb")
  console.log(bulb.src)
  if (bulb.src == "https://www.w3schools.com/js/pic_bulbon.gif") {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"
  }
}