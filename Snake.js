class Snake {
    x = 75
    y = 75

    width = 5
    height = 5

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
        if (this.x > this.limits.x) {
            this.x = 0
        } else if (this.x < 0) {
            this.x = this.limits.x
        } else if (this.y > this.limits.y) {
            this.y = 0
        } else if (this.y < 0) {
            this.y = this.limits.y
        }

        this.x += this.direction[0]
        this.y += this.direction[1]
    }

}

export { Snake }