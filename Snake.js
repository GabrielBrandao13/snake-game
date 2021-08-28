class Snake {
    x = 25
    y = 25

    speed = 6

    direction = [1, 0]

    constructor(limits) {
        this.limits = limits
    }

    tail = []

    ArrowUp() {
        this.direction = [0, -1]
    }
    ArrowDown() {
        this.direction = [0, 1]
    }
    ArrowLeft() {
        this.direction = [-1, 0]
    }
    ArrowRight() {
        this.direction = [1, 0]
    }

    move() {

        this.checkForBorderCollision()

        for (let i = this.tail.length - 1; i >= 0; i--) {
            let nextBlock = this.tail[i - 1]
            this.tail[i] = nextBlock ? nextBlock : { x: this.x, y: this.y }
        }

        this.x += this.direction[0]
        this.y += this.direction[1]
    }

    checkForBorderCollision() {
        if (this.x > this.limits.x) {
            this.x = 0
        } else if (this.x < 0) {
            this.x = this.limits.x
        } else if (this.y > this.limits.y) {
            this.y = 0
        } else if (this.y < 0) {
            this.y = this.limits.y
        }
    }

    grow() {
        const lastTail = this.tail[this.tail.length - 1]
        const { x, y } = lastTail ? {
            x: lastTail.x - this.direction[0], y: lastTail.y - this.direction[1]
        } : {
            x: this.x - this.direction[0], y: this.y - this.direction[1]
        }

        this.tail.push({
            x,
            y
        })
    }

}

export { Snake }