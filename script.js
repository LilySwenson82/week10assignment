document.getElementById("buttonAdd").addEventListener("click", () => {
  let table = document.getElementById("itemList");
  let row = table.insertRow(-1); // append to the end of the table
  row.insertCell(0).innerHTML = document.getElementById("inputColor").value;
  row.insertCell(1).innerHTML = document.getElementById("inputText").value;

  // reset input fields
  document.getElementById("inputColor").value = "";
  document.getElementById("inputText").value = "";
});