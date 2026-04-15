function autofill() {
    //alert("ff");

    var dataSrc = ["australia", "austria", "antartica", "argentina", "algeria"];

    var url = '../Lead/Companyautofill';
    var data1 = { "LeadID": 1 };
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            for (var i = 0; i < data.length; i++) {
                dataSrc += data[i].firstname + ",";
            }
        }
    });


    $("#myText").autocomplete({
        source: dataSrc
    });
}