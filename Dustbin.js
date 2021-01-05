class DustBin{
    constructor(x, y, width, height){
        var options={
            isStatic: true
        }
        this.body= Bodies.rectangle(x, y, width, height);
        this.height = height
        this.width = width
        World.add(world, this.body);
    }

    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        rectMode(CENTER);
    }
}