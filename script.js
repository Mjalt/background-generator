let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

console.log(body);
console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient);
//   body.style.background =
//     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

color2.addEventListener("input", setGradient);
//   body.style.background =
//     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });
