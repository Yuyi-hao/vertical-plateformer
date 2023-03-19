const canvas = document.querySelector('canvas'); // select canvas element 
canvas.width = 1024;
canvas.height = 576;

// cc -> canvas context
const cc = canvas.getContext('2d'); // get context the type of api 2d or 3d
const GRAVITY = 0.5;
const canvasScaled = {
    width: canvas.width / 4,
    height: canvas.height / 4
};

const floorCollision2D = [];

// cc.fillStyle = 'red';
// create a rectangle param -> (x, y, width, heigh)  coordinate start from top-left
// cc.fillRect(0, 0, canvas.width, canvas.height);


for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollision2D.push(floorCollisions.slice(i, i + 36));
}

const CollisionBlocks = [];

floorCollision2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            CollisionBlocks.push(
                new CollisionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16
                    }
                })
            )
        }
    })
})


const platformCollisions2D = [];

for (let i = 0; i < platformCollisions.length; i += 36) {
    platformCollisions2D.push(platformCollisions.slice(i, i + 36));
}

const platformCollision = [];

platformCollisions2D.forEach((row, y) => {
    row.forEach((Symbol, x) => {
        if (Symbol === 202) {
            const player = new Player({
                x: 500,
                y: 0
            })
            CollisionBlocks.push(
                new CollisionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16
                    }
                })
            )
        }
    })
})

// console.log(CollisionBlock)

// // context.fillStyle = 'white';
// // context.fillRect(0, 0, canvas.width, canvas.height);

// // create gravity 
// // context.fillStyle = 'red';
// // context.fillRect(200, 300, 100, 100);

// let y = 100;
const player = new Player({
    position:{
        x: 1000,
        y: 0
    },
    collisionBlocks:CollisionBlocks
})


const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    }
}



const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "tile/tiled/assets/background.png"
})

function animate() {
    cc.fillStyle = 'white';
    cc.fillRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(animate);
    cc.save();
    cc.scale(4, 4);
    cc.translate(0, -background.image.height + canvasScaled.height)
    background.update();
    CollisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.update();
    });
    cc.restore();
    player.update();
    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 5;
    else if (keys.a.pressed) player.velocity.x = -5;
}

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.d.pressed = true
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.a.pressed = true
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            player.velocity.y = -5
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            player.velocity.y = 1
            break;
    }
})


window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.d.pressed = false
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.a.pressed = false
            break;
        // case 'w':
        // case 'W':
        // case 'ArrowUp':
        //     player.velocity.y = -5
        //     break;
        // case 's':
        // case 'S':
        // case 'ArrowDown':
        //     player.velocity.y = 1
        //     break;
    }
})
