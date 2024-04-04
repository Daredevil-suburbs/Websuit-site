// scripts.js
function addData() {
    var name = document.getElementById("nameInput").value;
    var link = document.getElementById("linkInput").value;

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = name;
    cell3.innerHTML = "<a href='" + link + "' target='_blank'>" + link + "</a>";
}
