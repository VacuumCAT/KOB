import {AcGameObject} from "@/assets/scripts/AcGameObject";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
    }

    start() {
        super.start();
    }

    update() {
        super.update();
        this.render();
    }

    render() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.parent.width, this.parent.height);
    }
}