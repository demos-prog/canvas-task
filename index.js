const canvas = document.querySelector("#canv");
canvas.width = 600;
canvas.height = 300;

const dots = [4, 5, 4, 3, 4, 4.5, 3.2, 5, 5.3, 6.6];

function buildCanvas(arr) {
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const maxElem = Math.max(...arr);
  const height = canvas.offsetHeight;
  const countOfDots = arr.length;
  const stepX = canvas.offsetWidth / (countOfDots + 1);
  const diametr = 8;
  const radius = diametr / 2;

  ctx.fillStyle = "white";
  ctx.lineWidth = 0.8;
  ctx.beginPath();

  for (let i = 0; i < arr.length; i++) {
    const procent = (arr[i] / maxElem) * 100;
    const expression = (height / 100) * procent;

    if (i === 0) {
      ctx.moveTo(stepX, height - expression);
    }

    ctx.lineTo(stepX + stepX * i, height - expression);
    ctx.strokeRect(
      stepX + stepX * i - radius,
      height - (expression + radius),
      diametr,
      diametr
    );
    ctx.fillRect(
      stepX + stepX * i - radius,
      height - (expression + radius),
      diametr,
      diametr
    );
    ctx.moveTo(stepX + stepX * i, height - expression);
  }

  ctx.fill();
  ctx.stroke();
}

buildCanvas(dots);

let isDefault = true;
let previusArr = [...dots];

canvas.addEventListener("click", () => {
  buildCanvas(isDefault ? dots : [4, 5, 4, 3, 4, 4.5]);


  
  isDefault = !isDefault;
});

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
