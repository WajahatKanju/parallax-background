const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const GAME_SPEED = 15;

const image_4 = new Image();
image_4.src = './images/layer-4.png';

let x = 0;
let x2 = -2400;
const animate = _ => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(image_4, x, 0);
  ctx.drawImage(image_4, x+2400, 0);
  if(x < -2400) x = 0;
  else x-=GAME_SPEED;


};

animate();