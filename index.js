const canvas = document.querySelector("#canv");
canvas.width = 600;
canvas.height = 300;
ctx = canvas.getContext("2d");

const dots = [4, 5, 4, 3, 4, 4.5, 3.2, 7, 5.3, 6.6];

function buildCanvas(arr) {
  const countOfDots = arr.length;
  const delayY = canvas.offsetHeight;
  const stepX = canvas.offsetWidth / (countOfDots + 1);
  const diametr = 8;
  const radius = diametr / 2;

  ctx.fillStyle = "white";
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(stepX, delayY - arr[0] * 10);
  ctx.strokeRect(
    stepX - radius,
    delayY - arr[0] * 10 - radius,
    diametr,
    diametr
  );
  ctx.fillRect(stepX - radius, delayY - arr[0] * 10 - radius, diametr, diametr);

  for (let i = 1; i < arr.length; i++) {
    ctx.lineTo(stepX + stepX * i, delayY - arr[i] * 10);
    ctx.strokeRect(
      stepX + stepX * i - radius,
      delayY - arr[i] * 10 - radius,
      diametr,
      diametr
    );
    ctx.fillRect(
      stepX + stepX * i - radius,
      delayY - arr[i] * 10 - radius,
      diametr,
      diametr
    );
    ctx.moveTo(stepX + stepX * i, delayY - arr[i] * 10);
  }

  ctx.fill();
  ctx.stroke();
}

buildCanvas(dots);

let isDefault = true;

canvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  buildCanvas(isDefault ? dots : [4, 5, 4, 3, 4, 4.5]);
  isDefault = !isDefault;
});
