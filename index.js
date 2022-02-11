const canvas = document.querySelector("#canv");
canvas.width = 600;
canvas.height = 300;

const dots = [4, 5, 4, 3, 4, 4.5, 3.2, 7, 5.3, 6.6];

let countOfDots = 10;
let delayY = canvas.offsetHeight;
let stepX = canvas.offsetWidth / (countOfDots + 1);
let diametr = 6;
let radius = diametr / 2;

if (canvas.getContext) {
  ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(stepX, delayY - dots[0] * 10);
  ctx.strokeRect(
    stepX - radius,
    delayY - dots[0] * 10 - radius,
    diametr,
    diametr
  );
  ctx.fillRect(
    stepX - radius,
    delayY - dots[0] * 10 - radius,
    diametr,
    diametr
  );

  for (let i = 1; i < dots.length; i++) {
    ctx.lineTo(stepX + stepX * i, delayY - dots[i] * 10);
    ctx.strokeRect(
      stepX + stepX * i - radius,
      delayY - dots[i] * 10 - radius,
      diametr,
      diametr
    );
    ctx.fillRect(
      stepX + stepX * i - radius,
      delayY - dots[i] * 10 - radius,
      diametr,
      diametr
    );
    ctx.moveTo(stepX + stepX * i, delayY - dots[i] * 10);
  }
  ctx.fill();
  ctx.stroke();
}
