// Select color input
// Select size input

// This is the form that that the user enters the size of the table
const sizePickerForm = document.querySelector("#sizePicker");
// When it is submitted call the makeGrid function
sizePickerForm.onsubmit = makeGrid;

// This is the background color of the individual cells
var backgroundColorToUse;

// This is the color picker element that the user selects the background
// color
const colorPicker = document.querySelector("#colorPicker");

// Add an event listener for when they change the color so that any cells
// after that will get the new color
colorPicker.addEventListener("change", function() {

  backgroundColorToUse = colorPicker.value;
});

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {

  // Prevent the default actoin
  event.preventDefault();

  // Get the size of the table to create from the values that the user
  // entered
  const rows = document.querySelector("#inputHeight").value;
  const cols = document.querySelector("#inputWidth").value;

  // Set the background color to the value that was selected when the form
  // was submitted
  backgroundColorToUse = colorPicker.value;

  // This will be the new table whose size will be the values entered by
  // the user
  const newTableBody = document.createElement("tbody");

  // Create the new table by looping over the row and col values to create
  // the table rows and table data cells
  for (var row = 0; row < rows; row++) {

    // New tr
    let newTableRow = document.createElement("tr");

    for (var col = 0; col < cols; col++) {

      // New td
      const newTableCell = document.createElement("td");

      // Add an event listener for when the user clicks the td
      newTableCell.addEventListener("click", changeColor);

      // Add this to the row
      newTableRow.appendChild(newTableCell);
    }

    // Add the row to the table
    newTableBody.appendChild(newTableRow);
  }

  // This is the existing table div on the html page
  const pixelCanvasTable = document.querySelector("#pixelCanvas");

  // This is the table body within the table
  const existingTableBody = document.querySelector("tbody");

  // Remove it and replace it
  if (existingTableBody !== null) {

    pixelCanvasTable.removeChild(document.querySelector("tbody"));
  }

  pixelCanvasTable.appendChild(newTableBody);
}

// This function is the event handler for when a user clicks on a table cell
// It will "toggle" the background color by either changing it to the
// selected background color or removing it
function changeColor(event) {

  let a = event.target;

  if (a.style.backgroundColor === "") {

    a.style.backgroundColor = backgroundColorToUse;

  } else {

    a.style.backgroundColor = "";
  }
}
