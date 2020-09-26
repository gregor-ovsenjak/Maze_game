
const Player =  {

    PlayerContainer: null,
    i:0,
    j:0,

    init() {
        // initialize Player div
        this.PlayerContainer = document.createElement('div');
        this.PlayerContainer.classList.add("Player");
        // Initial position of the div
        document.getElementById("0_0").appendChild(this.PlayerContainer);
        // color the NxN div green
        const N = Maze.difficulty -1 ;
        document.getElementById(N+"_"+N).style.backgroundColor = "rgba(97, 136, 97, 0.712)"
        


    }
}

function MovePlayer(i,j){
    // border control
    if (i < 0 || j < 0 || i > Maze.difficulty - 1 || j >Maze.difficulty - 1) {
        console.log(undefined)
    }else  {
        // if there are no walls move the Player to next location
       document.getElementById(i+"_"+j).appendChild(Player.PlayerContainer);
    }
    // if you get to the end of the maze you win and you initialize a new game.
    setTimeout(function(){
        const N = Maze.difficulty -1 ;
        if(i== N && j ==N){
            alert("You Win");
            document.getElementById("0_0").appendChild(Player.PlayerContainer);
        }
    },200 )
}

document.body.addEventListener('keydown', (event) =>
        {   
            let current = Player.PlayerContainer.parentElement
            // get i and j index of the div 
            index = current.id.match(/(\d[\d\.]*)/g)
            Player.i =parseInt(index[0]);
            Player.j = parseInt(index[1]);
            // check if move is allowed and if it is move the div to next location
            switch(event.keyCode) {
                case 37: 
                    //left       
                    if (document.getElementById((Player.i)+"_"+Player.j).style.borderLeft === "1px solid transparent" ){
                        MovePlayer((Player.i -1),Player.j)
                    }else {break;}            
                
                break;

                

                case 38: 
                    //Up
                    if (document.getElementById((Player.i )+"_"+(Player.j)).style.borderTop === "1px solid transparent" ){
                        MovePlayer((Player.i),Player.j-1);
                    }else {break;}
                break;
                
                case 39:
                    // right

                    if (document.getElementById((Player.i )+"_"+(Player.j)).style.borderRight === "1px solid transparent" ){
                        MovePlayer((Player.i+1),Player.j);
                    }else {break;}

                break;

                case 40:
                    // down
                    if (document.getElementById((Player.i)+"_"+(Player.j)).style.borderBottom === "1px solid transparent" ){
                        MovePlayer((Player.i),Player.j+1);
                    }else {break;}


                break;
                
                
            }
});