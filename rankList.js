function getRankList(level){
    let rankList = [];
    console.log(localStorage.getItem(level));
    if (localStorage.getItem(level)) {
        rankList = JSON.parse(localStorage.getItem(level));
    }

    sort( rankList);
}

function addPlayer(level, name, step, time) {

    var rankList = [];
    if (localStorage.getItem(level)) {
        console.log(localStorage.getItem(level));
        rankList = JSON.parse(localStorage.getItem(level));
    }

    rankList.push([name,step,time]);

    localStorage.setItem(level, JSON.stringify(rankList));

   sort(rankList);
}
function createTable(tableData) {
    document.getElementById("rankList").innerHTML = "";
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    createHeader(tableBody);
    tableData.forEach(function(rowData) {
        let row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    $('#rankList').append(table);
}
function createHeader(tableBody){
    let row = document.createElement('tr');
    let cell1 = document.createElement('th')
    let cell2 = document.createElement('th')
    let cell3 = document.createElement('th')
    cell1.appendChild(document.createTextNode("Név"));
    row.appendChild(cell1);
    cell2.appendChild(document.createTextNode("Lépés"));
    row.appendChild(cell2);
    cell3.appendChild(document.createTextNode("Idő"));
    row.appendChild(cell3);
    tableBody.appendChild(row);
}

function sort(rankList){
    rankList.sort(function(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
    });
    createTable(rankList);
}
