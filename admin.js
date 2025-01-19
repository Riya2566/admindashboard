document.getElementById("addItemBtn").addEventListener("click", function() {
    // Get the table body
    const table = document.getElementById("menuTable").getElementsByTagName('tbody')[0];

    // Create a new row
    const newRow = table.insertRow(table.rows.length);

    // Insert cells for the new row (Name, Description, Price, Actions)
    const nameCell = newRow.insertCell(0);
    const descCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    // Set the cell contents (you can replace this with input fields for editing)
    nameCell.innerHTML = "New Item";
    descCell.innerHTML = "Item Description";
    priceCell.innerHTML = "$0.00";
    actionsCell.innerHTML = `<button class="delete-btn">Delete</button>`;

    // Add event listener for delete button
    actionsCell.querySelector("button").addEventListener("click", function() {
        table.deleteRow(newRow.rowIndex - 1);
    });
});
