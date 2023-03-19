class Player{
    constructor({position, collisionBlocks}){
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 25;
        this.height = 25;
        this.collisionBlocks = collisionBlocks;
    }
    draw(){
        cc.fillStyle = 'red';
        cc.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.applyGravity();
        this.checkVerticalCollision();
    }

    applyGravity(){
        this.position.y += this.velocity.y;
        // if(this.position.x + this.width + this.velocity.x > canvas.width){
        //     this.velocity.x = 0;
        // }
        // if(this.position.y + this.height + this.velocity.y < canvas.height){
        this.velocity.y += GRAVITY;
        // }
        // else{
        //     this.velocity.y = 0;
        // }

    }
    checkVerticalCollision(){
        for(let i=0; i<this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            if(collision({
                obj1: this,
                obj2: collisionBlock
            })){
                if(this.velocity.y > 0){
                    this.velocity.y = 0;
                }
            }
        }
    }
}