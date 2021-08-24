import { Snake } from './Snake.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const snake = new Snake()

function onKeyDown(e) {
    snake[e.key]()
}

function drawObject(object) {
    ctx.fillRect(object.pos.x, object.pos.y, object.size.width, object.size.height)
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.loop()
    drawObject(snake)
    requestAnimationFrame(loop)
}


window.addEventListener('keydown', onKeyDown)
loop()