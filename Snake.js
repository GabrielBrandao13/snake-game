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
        this.pos.x += this.direction[0]
        this.pos.y += this.direction[1]
    }

}

export { Snake }