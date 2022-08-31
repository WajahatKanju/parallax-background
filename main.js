const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const sliderLabel = document.getElementById("slider-label");
const slider = document.getElementById("slider");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let layers = [];

// let gameFrame = 0;
let gameSpeed = slider.value;


sliderLabel.innerHTML = `Game Speed ${gameSpeed}`;
slider.addEventListener("change", (event) => {
  sliderLabel.innerHTML = `Game Speed ${event.target.value}`;
  gameSpeed = event.target.value;
  init();
});



class Layer {
  constructor(imageUrl, speed) {
    this.imageUrl = imageUrl;
    this.image = new Image();
    this.image.src = this.imageUrl;
    this.speed = gameSpeed * speed;
    this.width = 2400
    this.x = 0;
    this.y = 0;

  }
  draw() {
    ctx.drawImage(this.image, this.x, 0);
    ctx.drawImage(this.image, this.x + this.width, 0);
  }
  update() {
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.speed;
    // this.x = gameFrame * this.speed % this.width
    this.draw();
  }
}
const init = () => {
  layers = [];
  const layer_1 = new Layer("./images/layer-1.png", 0.2);
  const layer_2 = new Layer("./images/layer-2.png", 0.4);
  const layer_3 = new Layer("./images/layer-3.png", 0.6);
  const layer_4 = new Layer("./images/layer-4.png", 0.8);
  const layer_5 = new Layer("./images/layer-5.png", 1);

  layers.push(layer_1, layer_2, layer_3, layer_4, layer_5);

  let x = 0;
  let x2 = -2400;
};
const animate = (_) => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  layers.forEach((layer) => layer.update());
  // if (x < -2400) {
  //   x = 2400 + x;
  //   console.log(x);
  // } else x -= gameSpeed;
  // gameFrame--;
};

init();
animate();

