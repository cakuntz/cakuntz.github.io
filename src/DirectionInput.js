class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            "ArrowUp": "Up",
            "KeyW": "Up",
            "ArrowLeft": "Left",
            "KeyA": "Left",
            "ArrowDown": "Down",
            "KeyS": "Down",
            "ArrowRight": "Right",
            "KeyD": "Right"

        }

    }

    get direction() {
        return this.heldDirections[0];
    }

    init() {
        document.addEventListener("keydown", e => {
        const dir = this.map[e.code];
        if (dir && this.heldDirections.indexOf(dir) === -1) {
            this.heldDirections.unshift(dir);
            console.log(this.heldDirections)
        }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
                console.log(this.heldDirections)
            }
        })
    }
}