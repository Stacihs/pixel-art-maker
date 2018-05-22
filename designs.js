const form = document.querySelector("form"),
	    table = document.querySelector("table");

form.addEventListener("click", function(event) {
  table.innerHTML = "";
  makeGrid();
  event.preventDefault();
});

function makeGrid(rows, columns) {
  let rows = document.getElementById("inputHeight").getAttribute("value"),
      columns = document.getElementById("inputWidth").getAttribute("value");
  //create rows
  let i = 0;
  while (i < rows) {
    tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    i++;
  //create columns
    	for (let j = 0; j < columns; j++) {
          box = document.createElement("td");
          table.lastchild.appendChild(box);
        }
  }
  //assign box color
  tableData.addEventListener("click", function() {
    let colorChoice = document.getElementById("colorPicker").getAttribute("value");
    box.style.backgroundColor = colorChoice;
  }):
 };
}):
