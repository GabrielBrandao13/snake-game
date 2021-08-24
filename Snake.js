class Snake {

    pos = {
        x: 75,
        y: 75
    }
    size = {
        width: 5,
        height: 5
    }

    direction = [0, 0]

    constructor(limits) {
        this.limits = limits
    }

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

    loop() {
        if (this.pos.x > this.limits.x) {
            this.pos.x = 0
        } else if (this.pos.x < 0) {
            this.pos.x = this.limits.x
        } else if (this.pos.y > this.limits.y) {
            this.pos.y = 0
        } else if (this.pos.y < 0) {
            this.pos.y = this.limits.y
        }

        this.pos.x += this.direction[0]
        this.pos.y += this.direction[1]
    }

}

export { Snake }