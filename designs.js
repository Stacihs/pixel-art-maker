const grid = document.querySelector("table");
const enter = document.querySelector("input[type='submit']");
enter.addEventListener("click", function(event) {
    grid.innerHTML = "";
    makeGrid();
    event.preventDefault();
  });

  function makeGrid(row, column) {
    row = document.getElementById("inputHeight").value;
    column = document.getElementById("inputWidth").value;
    //create row
    let i = 0;
    while (i < row) {
      const tr = document.createElement("tr");
      grid.appendChild(tr);
      i++;
      //create column
          for (let j = 0; j < column; j++) {
             $("tr:last-of-type").append("<td></td>");
            }
      }
      //assign box color
    $("td").click(function() {
      const colorChoice = document.getElementById("colorPicker").value;
      //td.style.backgroundColor = colorChoice;
      $(this).css("background-color", colorChoice);
    });
  };
