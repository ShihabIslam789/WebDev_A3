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
    let rows = document.querySelector("tr");
    for (let i = 0; i < rows.length; i++) {
        let selected_row = rows[i];
        selected_row.insertCell(-1);
    }
}
