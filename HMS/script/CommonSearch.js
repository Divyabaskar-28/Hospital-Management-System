function doSearch(txtboxID,TableID) {
    var searchText = document.getElementById('' + txtboxID + '').value;
    var targetTable = document.getElementById('' + TableID + '');
    var targetTableColCount;
    var searchcount = 0;
    //Loop through table rows
    try{
        $('#SearchNorec').remove();
    }catch(err){}
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
        var rowData = '';

        //Get column count from header row
        if (rowIndex == 0) {
            targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
            continue; //do not execute further code for header row.
        }

        //Process data rows. (rowIndex >= 1)
        for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
            var cellText = '';

            if (navigator.appName == 'Microsoft Internet Explorer')
                cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).innerText;
            else
                //cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
                cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).title;
            rowData += cellText;
        }

        // Make search case insensitive.
        rowData = rowData.toLowerCase();
        searchText = searchText.toLowerCase();

        //If search term is not found in row data
        //then hide the row, else show
        if (rowData.indexOf(searchText) == -1) {
            targetTable.rows.item(rowIndex).style.display = 'none';
            //var item = '';
            //item = '<tr><td colspan="' + targetTableColCount + '" style="text-align:center">No records found.</td></tr>';
            //$('#' + TableID + '').append(item);
            searchcount++;
            if (rowIndex == targetTable.rows.length - 1) {
                if (searchcount == targetTable.rows.length - 1) {
                    var item = '';
                    item = '<tr id="SearchNorec" ><td colspan="' + targetTableColCount + '" style="text-align:center">No records found.</td></tr>';
                    $('#' + TableID + '').append(item);
                }
            }
        }
        else {
            targetTable.rows.item(rowIndex).style.display = 'table-row';
        }
    }
}


//$(document).ready(function () {
//    $('#ComSearchTxt').on('input propertychange paste', function () {
//        var searchText = document.getElementById('ComSearchTxt').value;
//        var targetTable = document.getElementById('' + TableID + '');
//        var targetTableColCount;

//        //Loop through table rows
//        for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
//            var rowData = '';

//            //Get column count from header row
//            if (rowIndex == 0) {
//                targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
//                continue; //do not execute further code for header row.
//            }

//            //Process data rows. (rowIndex >= 1)
//            for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
//                var cellText = '';

//                if (navigator.appName == 'Microsoft Internet Explorer')
//                    cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).innerText;
//                else
//                    cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;

//                rowData += cellText;
//            }

//            // Make search case insensitive.
//            rowData = rowData.toLowerCase();
//            searchText = searchText.toLowerCase();

//            //If search term is not found in row data
//            //then hide the row, else show
//            if (rowData.indexOf(searchText) == -1) {
//                targetTable.rows.item(rowIndex).style.display = 'none';
//                //var item = '';
//                //item = '<tr><td colspan="' + targetTableColCount + '" style="text-align:center">No records found.</td></tr>';
//                //$('#' + TableID + '').append(item);
//            }
//            else {
//                targetTable.rows.item(rowIndex).style.display = 'table-row';
//            }
//        }
//    });
//})

