


    function addRow() {

        const table = document.getElementById("gpaCalc");
        const row = document.getElementById("clone");

        const clone = row.cloneNode(true);
        clone.id ="clone2";
        table.appendChild(clone);
        

    }
    
      
    

        // function deleteRow() {

        // var table = document.getElementById("gpaCalc");

        // var row = table.insertRow(2);
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);

        // cell1.innerHMTL="hello";
        // cell2.innerHMTL="hi";
        // cell1.innerHMTL="he";
        // cell2.innerHMTL="ho";

