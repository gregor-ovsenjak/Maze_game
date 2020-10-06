

function Snake_Head(x,y){
    this.prev_x = x;
    this.prev_y = y;
    this.x = x;
    this.y = y;
    this.length = [new Snake_part()];
    this.direction = [false,false,false,false];
    this.movement = [-8,-8,+8,+8];
    this.update = function() {
        this.direction.forEach(element => {
            if (element){
                index = this.direction.indexOf(element)

                
                if (index == 0) {
                    this.prev_y =  this.y;
                    this.x += this.movement[index]
                } else if (index == 2){
                    this.prev_y =  this.y;
                    this.x += this.movement[index]
                }

                if (index == 1) {
                    this.prev_x =  this.x;
                    this.y += this.movement[index]
                } else if (index == 3){
                    this.prev_x =  this.x;
                    this.y += this.movement[index]
                }

            }
        });
        stroke('green')
        fill('green');
        square(this.x,this.y, 8);
    }
    
    this.update_length = function(x,y,i) {
        /*
            recursive function that passes down x,y positions of the current snake part
            to the next snake part. When it reaches the last snake part it returns null

        */ 
        if (snake.length.length > 0){
            // x,y of this snake part are passed down to next snake_part
            X = snake.length[i].x;
            Y = snake.length[i].y;

            // x,y of previous snake part are the next x,y of this snake part
            snake.length[i].x = x;
            snake.length[i].y = y;
            // draw the snake parts
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

    this.check_if_collided = function() {
        for (var i = 1; i< snake.length.length; i++){

            if (snake.length[i].x == snake.x && snake.length[i].y == snake.y){
                console.log("Same");
                noLoop();
                setTimeout(function(){
                    snake.length = [new Snake_part()];
                
                snake.x = random(0,height);
                snake.y = random(0,height);
                snake.direction = [false,false,false,false]
                
                loop();
                },3000)
                
            
            }
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
    Canvas =  createCanvas(400, 400);
    const height = document.querySelector('canvas').height - 5
    frameRate(24);
    x_first = random(0,height);
    y_first = random(0,height);

    snake = new Snake_Head(x_first,y_first);

    Apple.x = random(0,height); // random x
    Apple.y = random(0,height); // random y 

    

}


function draw() {
    background(0);
    
    if (snake.x == snake.prev_x && snake.length.length > 1){
        keyPressed_X();
    } else  if (snake.y == snake.prev_y && snake.length.length > 1){
        keyPressed_Y();
    }  

    if (snake.length.length < 2){
        keyPressed_X();
        keyPressed_Y();
    }
    
    snake.update(); // updates the position of snake_head
    snake.update_length(snake.x,snake.y,0)// updates the positions of snake_parts
    snake.check_if_collided()

    if((Math.abs(snake.x -Apple.x) < 7) && ((Math.abs(snake.y -Apple.y) <7))){

        Apple.x = random(0,height);
        Apple.y = random(0,height);

        snake.length.push(new Snake_part())
    }// if apple and snake are less than 7 px apart 
     //1. move the apple to another random position
     //2. increase snake length

     Apple.update();
    
    

}



function FalseDirection(){
    snake.direction.forEach(element => {
        index = snake.direction.indexOf(element)
        snake.direction[index] = false
    })// changes snake.direction to false for all elements
}


function keyPressed_X() {
        if (keyIsDown(37) && !keyIsDown(38) && !keyIsDown(40)){
            FalseDirection()
            
            snake.direction[0] = true;// move LEFT

        }else if(keyIsDown(39) && !keyIsDown(38) && !keyIsDown(40)){
            FalseDirection()
            
            snake.direction[2] = true;// move RIGHT
        }

}


function keyPressed_Y() {
    
        if(keyIsDown(38) && !keyIsDown(37) && !keyIsDown(39)){
            FalseDirection()
            
            snake.direction[1] = true;// move UP
        }else if(keyIsDown(40) && !keyIsDown(37) && !keyIsDown(39)){
            FalseDirection()

            snake.direction[3] = true;// move DOWN
        }
}


