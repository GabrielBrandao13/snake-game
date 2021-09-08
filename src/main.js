import { Snake } from './Snake.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const displayScore = document.querySelector('span.score')
const bestScoreDisplay = document.querySelector('span.best-score')

const snake = new Snake()

var currentFruit = { x: 30, y: 30, color: '#ffffff' }

var score = 0

function getBestScore() {
    return Number(localStorage.getItem('best-score'))
}
function setBestScore() {
    const bestScore = getBestScore()
    if (score > bestScore || !bestScore) {
        localStorage.setItem('best-score', `${score}`)
    }
}

function setNewFruitLocation() {
    let randX = Math.floor(Math.random() * canvas.width),
        randY = Math.floor(Math.random() * canvas.height)
    currentFruit.x = randX
    currentFruit.y = randY
    checkForFruitCollisionWithTail()
}

function checkForFruitCollisionWithTail() {
    if (snake.tail.some(tail => tail.x == currentFruit.x && tail.y == currentFruit.y)) {
        setNewFruitLocation()
    }

}

function onKeyDown(e) {
    snake[e.key] && snake[e.key]()
}

function drawObject(object) {
    ctx.fillStyle = object.color
    ctx.fillRect(object.x, object.y, 1, 1)
}

function frames() {
    ctx.fillStyle = '#0a450f'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawObject(snake)
    for (let block of snake.tail) {
        drawObject(block)
    }
    drawObject(currentFruit)
    displayScore.textContent = score
    requestAnimationFrame(frames)
}

function playerMove() {
    snake.speed = 6 + score / 2
    checkForBorderCollision()
    snake.move()
    checkForFruitCollision()
    snake.onCollisionWithTail(reset)
    setTimeout(playerMove, 1000 / snake.speed)
}

function reset() {
    setBestScore()
    bestScoreDisplay.textContent = getBestScore()
    score = 0
}

function checkForFruitCollision() {
    if (snake.x == currentFruit.x && snake.y == currentFruit.y) {
        setNewFruitLocation()
        snake.grow()
        score++
    }
}

function checkForBorderCollision() {
    if (snake.x > canvas.width) {
        snake.x = 0
    } else if (snake.x < 0) {
        snake.x = canvas.width
    } else if (snake.y > canvas.height) {
        snake.y = 0
    } else if (snake.y < 0) {
        snake.y = canvas.height
    }
}


function start() {

    window.addEventListener('keydown', onKeyDown)

    frames()
    playerMove()
    setNewFruitLocation()
    bestScoreDisplay.textContent = getBestScore()
}

start()


