const ROWS = 4;
const COLS = 4;
const SQUARE_SIZE = 100;
const SIZE = ROWS*COLS-1;
var grid = [];
var finalGrid = [];

function randomize() 
{
    for (var i = SIZE-1; i >= 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        while(j==SIZE+1) j = Math.floor(Math.random() * (i + 1));
        var x = grid[i].value;
        grid[i].value = grid[j].value;
        grid[j].value = x;
    }
}
/**
Number of inversions must be an even number for a 'solvable' game
*/
function numInversions()
{
    var inversions = 0;
    for(var i=0;i<SIZE-1;i++)
    {
        for(var j=i+1;j<=SIZE-1;j++)
        {
            if(grid[i].value>grid[j].value)
            {
                inversions = inversions+1;
            }
        }
        
    }
    return inversions%2===0;
}
/**
Dummy function to generate a solvable random game. 
*/
function generateGameConfiguration()
{
    for(var i=0;i<ROWS;i++)
    {
        for(var j=0;j<COLS;j++)
        {
            //x,y,valor
            var cell = new Cell(j,i,i*ROWS+j+1);
            grid.push(cell);
            
        }
    }
    randomize();
    var validSolution = numInversions();
    while(!validSolution){
        randomize();
        validSolution = numInversions();
    }
}
function pos(x,y)
{
    return (x*ROWS+y);
}
function setup()
{
    createCanvas(ROWS*SQUARE_SIZE,COLS*SQUARE_SIZE);
    generateGameConfiguration();    
}
function draw()
{
    //background(0);
    for(var i=0;i<=SIZE;i++)
    {
        grid[i].show();
        //finalGrid[i].show();
    }
        
}
function swap(a,b)
{
    var tmp = grid[a].value;
    grid[a].value = grid[b].value;
    grid[b].value = tmp;
}
function down(x)
{
    return x+COLS;
}
function up(x)
{
    return x-COLS;
}
function left(x)
{
    return x-1;
}
function right(x)
{
    return x+1;
}
/**
Check all 4 neighbors of a clicked square to find the blank cell, then swap these two cells. 
*/
function mouseClicked() 
{
   
    var xIndex = Math.floor(mouseX/100);
    var yIndex = Math.floor(mouseY/100);
    var gridIndex = yIndex*ROWS+xIndex;
    //console.log(grid[gridIndex].value);
    if(down(gridIndex)<=SIZE && down(gridIndex)>=0)
    {
        if(grid[down(gridIndex)].isBlank())
        {
            swap(gridIndex,down(gridIndex));
            
        }
    }
    if(up(gridIndex)<=SIZE && up(gridIndex)>=0)
    {
        if(grid[up(gridIndex)].isBlank())
        {
            swap(gridIndex,up(gridIndex));
            
        }
        
    }
    if(left(gridIndex)<=SIZE && left(gridIndex)>=0)
    {
        if(grid[left(gridIndex)].isBlank())
        {
            swap(gridIndex,left(gridIndex));
            
        }
        
    }
    if(right(gridIndex)<=SIZE && right(gridIndex)>=0)
    {
        if(grid[right(gridIndex)].isBlank())
        {
            swap(gridIndex,right(gridIndex));
            
        }
        
    }
}