//Add a row
function addR() {
    //First we obtain elements by DOM method
    let grid = document.getElementById("grid");
    // store appended row elements to grid 
    let row = grid.insertRow(0);
    // starting from the first position  we add more rows based on columns
    row.insertCell(0);
    let number_columns = grid.rows[grid.rows.length - 1].cells.length - 1;
    //loop through the columns to add the needed rows 
    if(number_columns  >= 1)
    {
        for (let i = 0; i < number_columns; i++) {
            row.insertCell(0);
        }
    }
}
//Add a column
function addC() {
   //first we need to access the elements of the grid  using DOM methods
    let grid = document.getElementById("grid");
    //access to every row on the grid
    let everyRow = document.querySelectorAll("tr");

    for(let i = 0; i < everyRow.length; i++)
    { //iterate through every row to add cells horizontially
        // Fundamentally creates a new column each time
        let selectedRow = everyRow[i];

        selectedRow.insertCell(0);
    }
    if(everyRow.length < 1)
    {
        let newcolumn = grid.insertRow(0);
        newcolumn.insertCell(0);
    }

}
//Remove a row
function removeR() {
        
        let grid = document.getElementById("grid");

       
        grid.deleteRow(numRows-1);
    
        numRows--;
    
        
    }
