let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = grid.insertRow(0);
    row.insertCell(0);
    let number_columns = grid.rows[grid.rows.length - 1].cells.length - 1;
    if(number_columns  >= 1)
    {
        for (let i = 0; i < number_columns; i++) {
            row.insertCell(0);
        }
    }
}
