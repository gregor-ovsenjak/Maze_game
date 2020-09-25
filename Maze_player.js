

const Player =  {

    PlayerContainer: null,

    init() {

        this.PlayerContainer = document.createElement('div');
        this.PlayerContainer.classList.add("Player");
        document.getElementById("0_0").appendChild(this.PlayerContainer);
        //rows = Maze.elements.MazeContainer.getElementsByClassName("row")

        


    }
}



document.body.addEventListener('keydown', (event) =>
        {   
            let current = Player.PlayerContainer.parentElement
            index = current.id.match(/(\d[\d\.]*)/g)
            switch(event.keyCode) {
                case 37: 
                    //left
        
                    i = parseInt(index[0]) -1
                    j = parseInt(index[1]) 
                    document.getElementById(i+"_"+j).appendChild(Player.PlayerContainer);
                    current = Player.PlayerContainer.parentElement
                    console.log(i,j)
                break;

                

                case 38: 
                    //Up

                    i = parseInt(index[0]) 
                    j = parseInt(index[1]) -1
                    document.getElementById(i+"_"+j).appendChild(Player.PlayerContainer);
                    current = Player.PlayerContainer.parentElement
                    console.log(i,j)
                break;
                
                case 39:
                    // right


                    i = parseInt(index[0]) +1
                    j = parseInt(index[1]) 
                    document.getElementById(i+"_"+j).appendChild(Player.PlayerContainer);
                    console.log(i,j)


                break;

                case 40:
                    // down
                    i = parseInt(index[0]) 
                    j = parseInt(index[1]) +1;
                    document.getElementById(i+"_"+j).appendChild(Player.PlayerContainer);
                    current = Player.PlayerContainer.parentElement
                    console.log(i,j)


                break;
                
                
            }
});