let colors = ["blue", "pink", "yellow"];

let colorDiv = document.getElementById("colorBadge");

for (let i = 0; i < colors.length; i++) {
  // Creates a new div element
  let newDiv = document.createElement("div");

  newDiv.style.backgroundColor = colors[i];
  newDiv.style.width = "25px";
  newDiv.style.height = "25px";
  newDiv.style.borderRadius = "50%";
  newDiv.style.marginRight = "10px";
  //   newDiv.style.border = "2px solid black";

  colorDiv.appendChild(newDiv);
}
