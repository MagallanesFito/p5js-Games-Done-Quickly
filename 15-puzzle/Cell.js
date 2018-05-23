function Cell(i,j,value){
    this.x = i;
    this.y = j;
    this.value = value;
           
    this.show = function() {
        var x = this.x*SQUARE_SIZE;
        var y = this.y*SQUARE_SIZE;
        noStroke();
        
        if(!this.isBlank())
        {
            if(this.value %2==0)
            {
                fill(252, 249, 186);
            }
            else
            {
                fill(188, 39, 26);
            }
            rect(x,y,SQUARE_SIZE,SQUARE_SIZE);
            fill(0, 0, 0);
            textSize(32);
            text(this.value.toString(),x+SQUARE_SIZE/2-15, y+SQUARE_SIZE/2+10);            
        }
        else
        {
            fill(255, 255, 255);
            rect(x,y,SQUARE_SIZE,SQUARE_SIZE);
            stroke(0);
            strokeWeight(3);
            line(x    , y    , x + SQUARE_SIZE, y);
            line(x + SQUARE_SIZE, y    , x + SQUARE_SIZE, y + SQUARE_SIZE);
            line(x + SQUARE_SIZE, y +SQUARE_SIZE, x    , y + SQUARE_SIZE);
            line(x    , y + SQUARE_SIZE, x    , y);
            noStroke();
        }
        
        
    }
    this.isBlank = function(){
        return this.value == SIZE+1;
    }
}