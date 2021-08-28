import { Snake } from './Snake.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const snake = new Snake({ x: canvas.width, y: canvas.height })

var currentFruit = { x: 30, y: 30 }

let score = 0

function setNewFruitLocation() {
    let randX = Math.floor(Math.random() * canvas.width),
        randY = Math.floor(Math.random() * canvas.height)
    currentFruit.x = randX
    currentFruit.y = randY
}

function onKeyDown(e) {
    snake[e.key]()
}

function drawObject(object) {
    ctx.fillRect(object.x, object.y, 1, 1)
}

function frames() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawObject(snake)
    for (let block of snake.tail) {
        drawObject(block)
    }
    drawObject(currentFruit)
    requestAnimationFrame(frames)
}

function playerMove() {
    snake.move()
    checkForFruitCollision()
    setTimeout(playerMove, 1000 / snake.speed)
}

function checkForFruitCollision() {
    if (snake.x == currentFruit.x && snake.y == currentFruit.y) {
        setNewFruitLocation()
        snake.grow()
        score++
    }
}


window.addEventListener('keydown', onKeyDown)
window.addEventListener('click', () => {
    snake.grow()
})

frames()
playerMove()
