class Sprite{
    constructor({position, imageSrc}){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw(){
        if(!this.image){
            console.log("There is some error");
            return;
        }
        cc.drawImage(this.image, this.position.x, this.position.y);
    }

    update(){
        this.draw();
    }
}