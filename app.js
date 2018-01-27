"use strict";

let canvas = document.querySelector('.tutorial'),
	ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(200,0,0)';
ctx.fillRect(10,10,55,50);

ctx.fillStyle = 'rgba(0,0,200,.5)';
ctx.fillRect(30,30,55,50);