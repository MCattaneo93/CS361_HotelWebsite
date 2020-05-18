
window.onload = () => {

    createGrid(10, 10);
    

}



function createGrid(numx, numy){
    var table = document.createElement("TABLE");
    table.setAttribute("id", "map-grid");
    document.getElementById("content").appendChild(table);
    for(var x = 0; x < numx; x++){
      var row = document.createElement("TR");
      row.setAttribute("id", "row_"+x);
      document.getElementById("map-grid").appendChild(row);

      for(var y =0; y < numy; y++){
        var column = document.createElement("TD");
        column.style.background = "white";
        column.style.height = '60px';
        column.style.width  = '60px';
        document.getElementById("row_"+x).appendChild(column);
      }
    }
    return table;
  }