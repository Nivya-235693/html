var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["rollno"] = document.getElementById("rollno").value;
    formData["name"] = document.getElementById("name").value;
    formData["m1"] = document.getElementById("m1").value;
    formData["m2"] = document.getElementById("m2").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <input type="checkbox" id="del">`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("rollno").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("m1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("m2").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td){
    if (confirm('Do you want to delete this record?')) {
        ckList = document.querySelectorAll("input[type=checkbox]:checked");
        ckList.forEach(function(el){
            el.parentElement.parentElement.remove();
        });
    }
}

//Reset the data
function resetForm() {
    document.getElementById("rollno").value = '';
    document.getElementById("name").value = '';
    document.getElementById("m1").value = '';
    document.getElementById("m2").value = '';
    selectedRow = null;
}