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
   
    let grid = document.getElementById("grid");
    let everyRow = document.querySelectorAll("tr");
    for(let i = 0; i < everyRow.length; i++)
    {
        let selectedRow = everyRow[i];

        selectedRow.insertCell(0);
    }
    if(everyRow.length < 1)
    {
        let newRow = grid.insertRow(0);
        newRow.insertCell(0);
    }

}
