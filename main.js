import { grid } from './drawing.js' ;

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.geContext('2d');


grid(canvas, context);
