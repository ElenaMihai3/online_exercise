import Particle from "./classes/Particle.js";
import Vector from "./classes/Vector.js";
//import {random} from "./functions/lib.js"

{
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);

    let raindrops = [];
    const mouse = new Vector($canvas.width / 2, $canvas.height / 2);

    const handleMouseMove = e => {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    }

    // sets the canvas size to the browser size
    const handleResize = () => {
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
    };

    const drawRaindrops = () => {
        ctx.clearRect(0,0,$canvas.width, $canvas.height);
        //raindrops.push(new Particle(random(0,$canvas.width),0));
        raindrops.push(new Particle(mouse.x, mouse.y));
        
        raindrops = raindrops.filter(drop => drop.isAlive);
        raindrops.forEach(raindrop => raindrop.draw(ctx));
        
        requestAnimationFrame(drawRaindrops);
    }

    const init = () => {
        // listen to mousemove
        $canvas.addEventListener(`mousemove`, handleMouseMove);
        // initial resize
        handleResize();
        
        drawRaindrops();
       
        // listen to the resize event and set the size of the canvas to the browser window
        window.addEventListener(`resize`,handleResize);

    };

    init();
}