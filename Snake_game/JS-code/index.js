

function Snake(x,y){

    this.x = x;
    this.y = y;
    this.length = [];
    this.direction = [false,false,false,false];
    this.movement = [-8,-8,+8,+8];
    this.update = function() {
        this.direction.forEach(element => {
            if (element){
                index = this.direction.indexOf(element)

                
                if (index == 0) {
                    this.x += this.movement[index]
                } else if (index == 2){
                    this.x += this.movement[index]
                }

                if (index == 1) {
                    this.y += this.movement[index]
                } else if (index == 3){
                    this.y += this.movement[index]
                }

            }
        });
        stroke('green')
        fill('green');
        square(this.x,this.y, 8);
    }
    
    this.update_length = function(x,y,i) {
        if (snake.length.length > 0){

            X = snake.length[i].x;
            Y = snake.length[i].y;


            snake.length[i].x = x;
            snake.length[i].y = y;
            snake.length[i].update();
            
            

            if (i == (snake.length.length -1)){
                
                return null;
            }else {
                i +=1;
                this.update_length(X,Y,i)
                
            }

            return null;
        }
    }
}


const Apple = {
    
    on_the_canvas: false,
    x: null,
    y: null,
    update: function() {
        stroke('red')
        fill('red');
        ellipse(this.x,this.y, 5);
    }
}


function Snake_part(){

    this.x = null;
    this.y = null;
    this.update = function(){

        stroke('green')
        fill('green');
        square(this.x,this.y, 8);
        stroke(0);
        line(this.x,this.y,this.x+8,this.y)
        line(this.x,this.y,this.x,this.y+8)
        line(this.x+8,this.y+8,this.x,this.y+8)
        line(this.x+8,this.y+8,this.x+8,this.y)
    }

}


function setup() {
    createCanvas(400, 400);
    const height = document.querySelector('canvas').height - 5
    frameRate(23)
    x_first = random(0,height);
    y_first = random(0,height);

    snake = new Snake(x_first,y_first)

    Apple.x = random(0,height);
    Apple.y = random(0,height);

    Apple.on_the_canvas = true;
    

}


function draw() {
    background(0);
    keyPressed();
    snake.update();
    snake.update_length(snake.x,snake.y,0)
    
    if((Math.abs(snake.x -Apple.x) < 7) && ((Math.abs(snake.y -Apple.y) <7))){

        Apple.on_the_canvas = false;
        Apple.x = random(0,height);
        Apple.y = random(0,height);
        Apple.on_the_canvas = true;
        snake.length.push(new Snake_part())
    }


    if (Apple.on_the_canvas){
        Apple.update();
    }


}



function FalseDirection(){
    snake.direction.forEach(element => {
        index = snake.direction.indexOf(element)
        snake.direction[index] = false
    })// changes snake.direction to false for all elements
}


function keyPressed() {
    if (keyIsDown(37)){
        FalseDirection()
        snake.direction[0] = true;

    }

    if(keyIsDown(38)){
        FalseDirection()
        snake.direction[1] = true;
    }

    if(keyIsDown(39)){
        FalseDirection()
        snake.direction[2] = true;
    }

    if(keyIsDown(40)){
        FalseDirection()
        snake.direction[3] = true;
    }
}