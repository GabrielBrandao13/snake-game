class Snake {
    x = 25
    y = 25

    speed = 4

    direction = [0, 0]

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

}

export { Snake }