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

function toMixArrs(arr1, arr2, k) {
  let result = [];

  for (let j = 0; j < arr1.length; j++) {
    const maxValue = Math.max(arr1[j], arr2[j]);
    const minValue = Math.min(arr1[j], arr2[j]);
    const delta = (maxValue - minValue) / 10;

    result.push(minValue + delta * k);
  }

  return result;
}

let isDefault = true;

canvas.addEventListener("click", () => {
  const alterArr = [7, 5, 2, 3, 8, 3, 4.7, 9, 6.3, 8];

  // for (let i = 0; i < 10; i++) {
  buildCanvas(isDefault ? dots : toMixArrs(dots, alterArr, 10));
  // buildCanvas(isDefault ? dots :alterArr);
  // }

  isDefault = !isDefault;
});
