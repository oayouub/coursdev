
const text = document.querySelector(".textTag");
const bodyColor = document.querySelector("body");

function generateColor(){
    setTimeout(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let color = "rgb(" + r + ", " + g + ", " + b + ")";
        text.textContent = color;
        bodyColor.style.background = color;
        generateColor();
      }, 3000); 
    
};
generateColor();