const canvas = document.querySelector("#canv");
if(canvas instanceof HTMLElement){
  canvas.width = 600;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  
  const dots = [4, 5, 4, 3, 4, 4.5, 3.2, 5, 5.3, 6.6];
  
  function buildCanvas(arr) {
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
  
      if (i === 0) {
        ctx.moveTo(stepX, height - (height / 100) * procent);
      }
  
      ctx.lineTo(stepX + stepX * i, height - (height / 100) * procent);
      ctx.strokeRect(
        stepX + stepX * i - radius,
        height - ((height / 100) * procent + radius),
        diametr,
        diametr
      );
      ctx.fillRect(
        stepX + stepX * i - radius,
        height - ((height / 100) * procent + radius),
        diametr,
        diametr
      );
      ctx.moveTo(stepX + stepX * i, height - (height / 100) * procent);
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
}

