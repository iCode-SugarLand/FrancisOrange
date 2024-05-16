const fox = new Audio("fox.mp3");

window.addEventListener("mousemove",()=>{
  fox.play();
});

const foxLaugh = new Audio("foxLaugh.mp3");

window.addEventListener("click",()=>{
  foxLaugh.play();
});