let numRows = 0;
let numCols = 0;
let colorSelected;

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
