const bodyy = document.querySelector("body");
const boxes = document.querySelectorAll(".box");
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;
boxes.forEach(function (b) {
  console.log(b);
  b.addEventListener("click", function (e) {
    console.log(e);
    // if(e.target.id==='blue'){
    //     bodyy.style.backgroundColor="blue";
    // }
    const colors = console.log(e.target.id);
    switch (e.target.id) {
      case "blue":
        if (count1 % 2 !== 0) {
          bodyy.style.backgroundColor = "blue";
          count1++;
        } else {
          bodyy.style.backgroundColor = "grey";
          count1++;
        }
        break;
      case "white":
        if (count2 % 2 !== 0) {
          bodyy.style.backgroundColor = "white";
          count2++;
        } else {
          bodyy.style.backgroundColor = "grey";
          count2++;
        }
        break;
      case "green":
        if (count3 % 2 !== 0) {
          bodyy.style.backgroundColor = "green";
          count3++;
        } else {
          bodyy.style.backgroundColor = "grey";
          count3++;
        }
        break;
      case "yellow":
        if (count4 % 2 !== 0) {
          bodyy.style.backgroundColor = "yellow";
          count4++;
        } else {
          bodyy.style.backgroundColor = "grey";
          count4++;
        }
        break;
    }
  });
});
