const colors = ["blue", "pink", "yellow"];

const handleColor = (e) => {
  console.log(e);
};

const colorDiv = document.getElementById("colorBadge");

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
  newDiv.addEventListener("click", handleColor(colors[i]));
}

// why click is making in mounting itself?
// upload button with type imgage need to be working
//  referece ->
// https://chat.openai.com/c/3ef02859-696e-41df-b07f-f2d6d08d1c51
