//***************************__________________Mani__________________*********************/
var CountryID, StateID, CCountryID, CStateID;
function closepopupenq1() {
    $('.divPopupBackground').css({ "display": "none" });
    $('#divnamepopup').css({ 'display': 'none' });
    $('#Mainadd').css({ 'display': 'none' });
    $("#Details").html('');

    var Redirect = document.getElementById("Redirect").value;
    if (Redirect == 1)
        location.href = '../Lead/Index';
    else if (Redirect == 2)
        location.href = '../NoFollowup/Index';
    else if (Redirect == 3)
        location.href = '../Taskgrid/Index';
    else if (Redirect == 4)
        location.href = '../Reassignleads/Index';
}

function changesate1() {
    debugger;
    $('#CddsState1 option').remove();
    COUNTRYID = $('select#cddlcountry option:selected').val();
    var url = '../Lead/selectedstate';
    var data1 = { "COUNTRYID": COUNTRYID };
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            if (data.length == 0) {
                $("#CddsState1").append($("<option></option>").val("0").html("No data"));
            }
            for (var i = 0; i < data.length; i++) {
                $("#CddsState1").append($("<option></option>").val(data[i].ID).html(data[i].STATENAME));

            }
            $("#CddsState1").val(CStateID);
        }
    });
}
function changesate() {
    debugger;
    $('#ddlstate option').remove();
    COUNTRYID = $("#ddlcountry :selected").val();
    var url = '../Lead/selectedstate';
    var data1 = { "COUNTRYID": COUNTRYID };
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            if (data.length == 0) {
                $("#ddlstate").append($("<option></option>").val("0").html("No data"));
            }
           
            for (var i = 0; i < data.length; i++) {
                $("#ddlstate").append($("<option></option>").val(data[i].ID).html(data[i].STATENAME));

            }
            $("#ddlstate").val(StateID);
        }
    });
 
}
function showdetails(id) {
    debugger;
    details(id);
    var dataUser = '@Session["AdminUserID"]';
    dataUser = parseInt(dataUser);
    //alert(dataUser);

    $('.divPopupBackground').css({ 'height': (document.documentElement.scrollHeight | document.body.scrollHeight) + 155 + 'px', 'display': 'block' });

    $('#divnamepopup').css({
        'top': '50px',
        'left': '25%',
        'display': 'block',
        'z-index': '999'

    });
}
  
    function showimg() {
        $("#imgdiv").mouseover(function () {
            $("#lnkshowimg").css({ 'display': 'block' });

        });
        $("#imgdiv").mouseleave(function () {
            $("#lnkshowimg").css({ 'display': 'none' });
        });
    }
    function showimg1() {
        $("#imgdiv1").mouseover(function () {
            $("#lnkshowimg1").css({ 'display': 'block' });

        });
        $("#imgdiv1").mouseleave(function () {
            $("#lnkshowimg1").css({ 'display': 'none' });
        });
    }

    function showimg2() {
        $("#imgdiv2").mouseover(function () {
            $("#lnkshowimg2").css({ 'display': 'block' });

        });
        $("#imgdiv2").mouseleave(function () {
            $("#lnkshowimg2").css({ 'display': 'none' });
        });
    }

    function showimg3() {
        $("#imgdiv3").mouseover(function () {
            $("#lnkshowimg3").css({ 'display': 'block' });

        });
        $("#imgdiv3").mouseleave(function () {
            $("#lnkshowimg3").css({ 'display': 'none' });
        });
    }

    function showimg4() {
        $("#imgdiv4").mouseover(function () {
            $("#lnkshowimg4").css({ 'display': 'block' });

        });
        $("#imgdiv4").mouseleave(function () {
            $("#lnkshowimg4").css({ 'display': 'none' });
        });
    }

    function showimg5() {
        $("#imgdiv5").mouseover(function () {
            $("#lnkshowimg5").css({ 'display': 'block' });

        });
        $("#imgdiv5").mouseleave(function () {
            $("#lnkshowimg5").css({ 'display': 'none' });
        });
    }

    function showimg6() {
        $("#imgdiv6").mouseover(function () {
            $("#lnkshowimg6").css({ 'display': 'block' });

        });
        $("#imgdiv6").mouseleave(function () {
            $("#lnkshowimg6").css({ 'display': 'none' });
        });
    }
    function showimg7() {
        $("#imgdiv7").mouseover(function () {
            $("#lnkshowimg7").css({ 'display': 'block' });

        });
        $("#imgdiv7").mouseleave(function () {
            $("#lnkshowimg7").css({ 'display': 'none' });
        });
    }
    function showimg8() {
        $("#imgdiv8").mouseover(function () {
            $("#lnkshowimg8").css({ 'display': 'block' });

        });
        $("#imgdiv8").mouseleave(function () {
            $("#lnkshowimg8").css({ 'display': 'none' });
        });
    }
    function showimg9() {
        $("#imgdiv9").mouseover(function () {
            $("#lnkshowimg9").css({ 'display': 'block' });

        });
        $("#imgdiv9").mouseleave(function () {
            $("#lnkshowimg9").css({ 'display': 'none' });
        });
    }
    function showimg10() {
        $("#imgdiv10").mouseover(function () {
            $("#lnkshowimg10").css({ 'display': 'block' });

        });
        $("#imgdiv10").mouseleave(function () {
            $("#lnkshowimg10").css({ 'display': 'none' });
        });
    }
    function showimg11() {
        $("#imgdiv11").mouseover(function () {
            $("#lnkshowimg11").css({ 'display': 'block' });

        });
        $("#imgdiv11").mouseleave(function () {
            $("#lnkshowimg11").css({ 'display': 'none' });
        });
    }
    function showimg12() {
        $("#imgdiv12").mouseover(function () {
            $("#lnkshowimg12").css({ 'display': 'block' });

        });
        $("#imgdiv12").mouseleave(function () {
            $("#lnkshowimg12").css({ 'display': 'none' });
        });
    }
    function showimg13() {
        $("#imgdiv13").mouseover(function () {
            $("#lnkshowimg13").css({ 'display': 'block' });

        });
        $("#imgdiv13").mouseleave(function () {
            $("#lnkshowimg13").css({ 'display': 'none' });
        });
    }
    function showimg14() {
        $("#imgdiv14").mouseover(function () {
            $("#lnkshowimg14").css({ 'display': 'block' });

        });
        $("#imgdiv14").mouseleave(function () {
            $("#lnkshowimg14").css({ 'display': 'none' });
        });
    }
    function showimg15() {
       
        $("#imgdiv15").mouseover(function () {
            $("#lnkshowimg15").css({ 'display': 'block' });

        });
        $("#imgdiv15").mouseleave(function () {
            $("#lnkshowimg15").css({ 'display': 'none' });
        });
    }
    function showimg16() {
        $("#imgdiv16").mouseover(function () {
            $("#lnkshowimg16").css({ 'display': 'block' });

        });
        $("#imgdiv16").mouseleave(function () {
            $("#lnkshowimg16").css({ 'display': 'none' });
        });
    }
    function showimg17() {
        $("#imgdiv17").mouseover(function () {
            $("#lnkshowimg17").css({ 'display': 'block' });

        });
        $("#imgdiv17").mouseleave(function () {
            $("#lnkshowimg17").css({ 'display': 'none' });
        });
    }
    function showimg18() {
        $("#imgdiv18").mouseover(function () {
            $("#lnkshowimg18").css({ 'display': 'block' });

        });
        $("#imgdiv18").mouseleave(function () {
            $("#lnkshowimg18").css({ 'display': 'none' });
        });
    }
    function showimg19() {
        $("#imgdiv19").mouseover(function () {
            $("#lnkshowimg19").css({ 'display': 'block' });

        });
        $("#imgdiv19").mouseleave(function () {
            $("#lnkshowimg19").css({ 'display': 'none' });
        });
    }
    function showimg20() {
        $("#imgdiv20").mouseover(function () {
            $("#lnkshowimg20").css({ 'display': 'block' });

        });
        $("#imgdiv20").mouseleave(function () {
            $("#lnkshowimg20").css({ 'display': 'none' });
        });
    }
    function showimg21() {
        $("#imgdiv21").mouseover(function () {
            $("#lnkshowimg21").css({ 'display': 'block' });

        });
        $("#imgdiv21").mouseleave(function () {
            $("#lnkshowimg21").css({ 'display': 'none' });
        });
    }
    function showimg22() {
        $("#imgdiv22").mouseover(function () {
            $("#lnkshowimg22").css({ 'display': 'block' });

        });
        $("#imgdiv22").mouseleave(function () {
            $("#lnkshowimg22").css({ 'display': 'none' });
        });
    }
    function showimg23() {
        $("#imgdiv23").mouseover(function () {
            $("#lnkshowimg23").css({ 'display': 'block' });

        });
        $("#imgdiv23").mouseleave(function () {
            $("#lnkshowimg23").css({ 'display': 'none' });
        });
    }
    function showimg24() {
        $("#imgdiv24").mouseover(function () {
            $("#lnkshowimg24").css({ 'display': 'block' });

        });
        $("#imgdiv24").mouseleave(function () {
            $("#lnkshowimg24").css({ 'display': 'none' });
        });
    }
    function showimg25() {
        $("#imgdiv25").mouseover(function () {
            $("#lnkshowimg25").css({ 'display': 'block' });

        });
        $("#imgdiv25").mouseleave(function () {
            $("#lnkshowimg25").css({ 'display': 'none' });
        });
    }
 
    function showtextbox(id) {
        debugger;
        document.getElementById('ddlcountry').value = CountryID;
        document.getElementById('CddsState1').value = CCountryID;
        changesate();
        changesate1();
        if (id == 0) {
            $('#txtncommon').css({ 'display': 'block' });
            $("#imgdiv").css({ 'display': 'none' });
            $('#txtncommon1').css({ 'display': 'none' });
            $("#imgdiv1").css({ 'display': 'block' });
            $('#txtncommon2').css({ 'display': 'none' });
            $("#imgdiv2").css({ 'display': 'block' });
            $('#txtncommon3').css({ 'display': 'none' });
            $("#imgdiv3").css({ 'display': 'block' });
            $('#txtncommon4').css({ 'display': 'none' });
            $("#imgdiv4").css({ 'display': 'block' });
            $('#txtncommon5').css({ 'display': 'none' });
            $("#imgdiv5").css({ 'display': 'block' });
            $('#txtncommon6').css({ 'display': 'none' });
            $("#imgdiv6").css({ 'display': 'block' });
            $('#txtncommon7').css({ 'display': 'none' });
            $("#imgdiv7").css({ 'display': 'block' });
            $('#txtncommon8').css({ 'display': 'none' });
            $("#imgdiv8").css({ 'display': 'block' });
            $('#txtncommon9').css({ 'display': 'none' });
            $("#imgdiv9").css({ 'display': 'block' });
            $('#txtncommon10').css({ 'display': 'none' });
            $("#imgdiv10").css({ 'display': 'block' });
            $('#txtncommon11').css({ 'display': 'none' });
            $("#imgdiv11").css({ 'display': 'block' });
            $('#txtncommon12').css({ 'display': 'none' });
            $("#imgdiv12").css({ 'display': 'block' });
            $('#txtncommon13').css({ 'display': 'none' });
            $("#imgdiv13").css({ 'display': 'block' });
            $('#txtncommon14').css({ 'display': 'none' });
            $("#imgdiv14").css({ 'display': 'block' });
            $('#txtncommon15').css({ 'display': 'none' });
            $("#imgdiv15").css({ 'display': 'block' });
            $('#txtncommon16').css({ 'display': 'none' });
            $("#imgdiv16").css({ 'display': 'block' });
            $('#txtncommon17').css({ 'display': 'none' });
            $("#imgdiv17").css({ 'display': 'block' });
            $('#txtncommon18').css({ 'display': 'none' });
            $("#imgdiv18").css({ 'display': 'block' });
            $('#txtncommon19').css({ 'display': 'none' });
            $("#imgdiv19").css({ 'display': 'block' });
            $('#txtncommon20').css({ 'display': 'none' });
            $("#imgdiv20").css({ 'display': 'block' });
            $('#txtncommon21').css({ 'display': 'none' });
            $("#imgdiv21").css({ 'display': 'block' });
            $('#txtncommon22').css({ 'display': 'none' });
            $("#imgdiv22").css({ 'display': 'block' });
            $('#txtncommon23').css({ 'display': 'none' });
            $("#imgdiv23").css({ 'display': 'block' });
            $('#txtncommon24').css({ 'display': 'none' });
            $("#imgdiv24").css({ 'display': 'block' });
            $('#txtncommon25').css({ 'display': 'none' });
            $("#imgdiv25").css({ 'display': 'block' });

        }
     else if (id == 1) {
         $('#txtncommon1').css({ 'display': 'block' });
         $("#imgdiv1").css({ 'display': 'none' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 2) {
         $('#txtncommon2').css({ 'display': 'block' });
         $("#imgdiv2").css({ 'display': 'none' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 3) {

         $('#txtncommon3').css({ 'display': 'block' });
         $("#imgdiv3").css({ 'display': 'none' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });

     }
     else if (id == 4) {
         $('#txtncommon4').css({ 'display': 'block' });
         $("#imgdiv4").css({ 'display': 'none' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 5) {
         $('#txtncommon5').css({ 'display': 'block' });
         $("#imgdiv5").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 6) {
         $('#txtncommon6').css({ 'display': 'block' });
         $("#imgdiv6").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 7) {
            $('#txtncommon7').css({ 'display': 'block' });
            $("#imgdiv7").css({ 'display': 'none' });
            $('#txtncommon1').css({ 'display': 'none' });
            $("#imgdiv1").css({ 'display': 'block' });
            $('#txtncommon2').css({ 'display': 'none' });
            $("#imgdiv2").css({ 'display': 'block' });
            $('#txtncommon3').css({ 'display': 'none' });
            $("#imgdiv3").css({ 'display': 'block' });
            $('#txtncommon4').css({ 'display': 'none' });
            $("#imgdiv4").css({ 'display': 'block' });
            $('#txtncommon5').css({ 'display': 'none' });
            $("#imgdiv5").css({ 'display': 'block' });
            $('#txtncommon6').css({ 'display': 'none' });
            $("#imgdiv6").css({ 'display': 'block' });
            $('#txtncommon').css({ 'display': 'none' });
            $("#imgdiv").css({ 'display': 'block' });
            $('#txtncommon8').css({ 'display': 'none' });
            $("#imgdiv8").css({ 'display': 'block' });
            $('#txtncommon9').css({ 'display': 'none' });
            $("#imgdiv9").css({ 'display': 'block' });
            $('#txtncommon10').css({ 'display': 'none' });
            $("#imgdiv10").css({ 'display': 'block' });
            $('#txtncommon11').css({ 'display': 'none' });
            $("#imgdiv11").css({ 'display': 'block' });
            $('#txtncommon12').css({ 'display': 'none' });
            $("#imgdiv12").css({ 'display': 'block' });
            $('#txtncommon13').css({ 'display': 'none' });
            $("#imgdiv13").css({ 'display': 'block' });
            $('#txtncommon14').css({ 'display': 'none' });
            $("#imgdiv14").css({ 'display': 'block' });
            $('#txtncommon15').css({ 'display': 'none' });
            $("#imgdiv15").css({ 'display': 'block' });
            $('#txtncommon16').css({ 'display': 'none' });
            $("#imgdiv16").css({ 'display': 'block' });
            $('#txtncommon17').css({ 'display': 'none' });
            $("#imgdiv17").css({ 'display': 'block' });
            $('#txtncommon18').css({ 'display': 'none' });
            $("#imgdiv18").css({ 'display': 'block' });
            $('#txtncommon19').css({ 'display': 'none' });
            $("#imgdiv19").css({ 'display': 'block' });
            $('#txtncommon20').css({ 'display': 'none' });
            $("#imgdiv20").css({ 'display': 'block' });
            $('#txtncommon21').css({ 'display': 'none' });
            $("#imgdiv21").css({ 'display': 'block' });
            $('#txtncommon22').css({ 'display': 'none' });
            $("#imgdiv22").css({ 'display': 'block' });
            $('#txtncommon23').css({ 'display': 'none' });
            $("#imgdiv23").css({ 'display': 'block' });
            $('#txtncommon24').css({ 'display': 'none' });
            $("#imgdiv24").css({ 'display': 'block' });
            $('#txtncommon25').css({ 'display': 'none' });
            $("#imgdiv25").css({ 'display': 'block' });
     }
    else if (id == 8) {
            $('#txtncommon8').css({ 'display': 'block' });
            $("#imgdiv8").css({ 'display': 'none' });
            $('#txtncommon1').css({ 'display': 'none' });
            $("#imgdiv1").css({ 'display': 'block' });
            $('#txtncommon2').css({ 'display': 'none' });
            $("#imgdiv2").css({ 'display': 'block' });
            $('#txtncommon3').css({ 'display': 'none' });
            $("#imgdiv3").css({ 'display': 'block' });
            $('#txtncommon4').css({ 'display': 'none' });
            $("#imgdiv4").css({ 'display': 'block' });
            $('#txtncommon5').css({ 'display': 'none' });
            $("#imgdiv5").css({ 'display': 'block' });
            $('#txtncommon6').css({ 'display': 'none' });
            $("#imgdiv6").css({ 'display': 'block' });
            $('#txtncommon7').css({ 'display': 'none' });
            $("#imgdiv7").css({ 'display': 'block' });
            $('#txtncommon').css({ 'display': 'none' });
            $("#imgdiv").css({ 'display': 'block' });
            $('#txtncommon9').css({ 'display': 'none' });
            $("#imgdiv9").css({ 'display': 'block' });
            $('#txtncommon10').css({ 'display': 'none' });
            $("#imgdiv10").css({ 'display': 'block' });
            $('#txtncommon11').css({ 'display': 'none' });
            $("#imgdiv11").css({ 'display': 'block' });
            $('#txtncommon12').css({ 'display': 'none' });
            $("#imgdiv12").css({ 'display': 'block' });
            $('#txtncommon13').css({ 'display': 'none' });
            $("#imgdiv13").css({ 'display': 'block' });
            $('#txtncommon14').css({ 'display': 'none' });
            $("#imgdiv14").css({ 'display': 'block' });
            $('#txtncommon15').css({ 'display': 'none' });
            $("#imgdiv15").css({ 'display': 'block' });
            $('#txtncommon16').css({ 'display': 'none' });
            $("#imgdiv16").css({ 'display': 'block' });
            $('#txtncommon17').css({ 'display': 'none' });
            $("#imgdiv17").css({ 'display': 'block' });
            $('#txtncommon18').css({ 'display': 'none' });
            $("#imgdiv18").css({ 'display': 'block' });
            $('#txtncommon19').css({ 'display': 'none' });
            $("#imgdiv19").css({ 'display': 'block' });
            $('#txtncommon20').css({ 'display': 'none' });
            $("#imgdiv20").css({ 'display': 'block' });
            $('#txtncommon21').css({ 'display': 'none' });
            $("#imgdiv21").css({ 'display': 'block' });
            $('#txtncommon22').css({ 'display': 'none' });
            $("#imgdiv22").css({ 'display': 'block' });
            $('#txtncommon23').css({ 'display': 'none' });
            $("#imgdiv23").css({ 'display': 'block' });
            $('#txtncommon24').css({ 'display': 'none' });
            $("#imgdiv24").css({ 'display': 'block' });
            $('#txtncommon25').css({ 'display': 'none' });
            $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 9) {
         $('#txtncommon9').css({ 'display': 'block' });
         $("#imgdiv9").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 10) {
         $('#txtncommon10').css({ 'display': 'block' });
         $("#imgdiv10").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 11) {
         $('#txtncommon11').css({ 'display': 'block' });
         $("#imgdiv11").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 12) {
         $('#txtncommon12').css({ 'display': 'block' });
         $("#imgdiv12").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 13) {
         $('#txtncommon13').css({ 'display': 'block' });
         $("#imgdiv13").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 14) {
         $('#txtncommon14').css({ 'display': 'block' });
         $("#imgdiv14").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 15) {
         $('#txtncommon15').css({ 'display': 'block' });
         $("#imgdiv15").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 16) {
         $('#txtncommon16').css({ 'display': 'block' });
         $("#imgdiv16").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 18) {
         $('#txtncommon18').css({ 'display': 'block' });
         $("#imgdiv18").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 19) {
         $('#txtncommon19').css({ 'display': 'block' });
         $("#imgdiv19").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 20) {
         $('#txtncommon20').css({ 'display': 'block' });
         $("#imgdiv20").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 21) {
         $('#txtncommon21').css({ 'display': 'block' });
         $("#imgdiv21").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 22) {
         $('#txtncommon22').css({ 'display': 'block' });
         $("#imgdiv22").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 23) {
         $('#txtncommon23').css({ 'display': 'block' });
         $("#imgdiv23").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 24) {
         $('#txtncommon24').css({ 'display': 'block' });
         $("#imgdiv24").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });
         $('#txtncommon25').css({ 'display': 'none' });
         $("#imgdiv25").css({ 'display': 'block' });
     }
     else if (id == 25) {
         $('#txtncommon25').css({ 'display': 'block' });
         $("#imgdiv25").css({ 'display': 'none' });
         $('#txtncommon1').css({ 'display': 'none' });
         $("#imgdiv1").css({ 'display': 'block' });
         $('#txtncommon2').css({ 'display': 'none' });
         $("#imgdiv2").css({ 'display': 'block' });
         $('#txtncommon3').css({ 'display': 'none' });
         $("#imgdiv3").css({ 'display': 'block' });
         $('#txtncommon4').css({ 'display': 'none' });
         $("#imgdiv4").css({ 'display': 'block' });
         $('#txtncommon5').css({ 'display': 'none' });
         $("#imgdiv5").css({ 'display': 'block' });
         $('#txtncommon6').css({ 'display': 'none' });
         $("#imgdiv6").css({ 'display': 'block' });
         $('#txtncommon7').css({ 'display': 'none' });
         $("#imgdiv7").css({ 'display': 'block' });
         $('#txtncommon8').css({ 'display': 'none' });
         $("#imgdiv8").css({ 'display': 'block' });
         $('#txtncommon9').css({ 'display': 'none' });
         $("#imgdiv9").css({ 'display': 'block' });
         $('#txtncommon10').css({ 'display': 'none' });
         $("#imgdiv10").css({ 'display': 'block' });
         $('#txtncommon11').css({ 'display': 'none' });
         $("#imgdiv11").css({ 'display': 'block' });
         $('#txtncommon12').css({ 'display': 'none' });
         $("#imgdiv12").css({ 'display': 'block' });
         $('#txtncommon13').css({ 'display': 'none' });
         $("#imgdiv13").css({ 'display': 'block' });
         $('#txtncommon14').css({ 'display': 'none' });
         $("#imgdiv14").css({ 'display': 'block' });
         $('#txtncommon15').css({ 'display': 'none' });
         $("#imgdiv15").css({ 'display': 'block' });
         $('#txtncommon16').css({ 'display': 'none' });
         $("#imgdiv16").css({ 'display': 'block' });
         $('#txtncommon17').css({ 'display': 'none' });
         $("#imgdiv17").css({ 'display': 'block' });
         $('#txtncommon18').css({ 'display': 'none' });
         $("#imgdiv18").css({ 'display': 'block' });
         $('#txtncommon19').css({ 'display': 'none' });
         $("#imgdiv19").css({ 'display': 'block' });
         $('#txtncommon20').css({ 'display': 'none' });
         $("#imgdiv20").css({ 'display': 'block' });
         $('#txtncommon21').css({ 'display': 'none' });
         $("#imgdiv21").css({ 'display': 'block' });
         $('#txtncommon22').css({ 'display': 'none' });
         $("#imgdiv22").css({ 'display': 'block' });
         $('#txtncommon23').css({ 'display': 'none' });
         $("#imgdiv23").css({ 'display': 'block' });
         $('#txtncommon24').css({ 'display': 'none' });
         $("#imgdiv24").css({ 'display': 'block' });
         $('#txtncommon').css({ 'display': 'none' });
         $("#imgdiv").css({ 'display': 'block' });

     }
    }
 


    function Cancel(LeadID) {
        details(LeadID);
    }



    function hidepopup() {
        $('.divPopupBackground').css({ "display": "none" });
        $('#divnamepopup').css({ 'display': 'none' });
    }
    //function fnEmailCheck1(str) {
    //    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //    if (filter.test(str)) {

    //        testresults= true;
    //    }
    //    else { testresults = false;; }
    //    //var filter = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$';
    //    //if (filter.test(str))
    //    //    testresults = true;
    //    //else {
    //    //    testresults = false;
    //    //}
    //   // return (testresults)
    //}
    function fnEmailCheck1(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            testresults = true;
        }
        else {
            //alert("You have entered an invalid email address!");
            testresults = false;
        }
      
      //  testresults = true;
        return (testresults);
    }
    function editdetail(Flag, LeadID) {
        debugger;
        if (Flag == 0) {
            Txtedit = document.getElementById("field").value;
            if (Txtedit == "") {
                $('#ResultMessage').html('').html('Enter the value.');
                document.getElementById("firstname").focus();
                $('body,html').animate({ scrollTop: 0 }, 200);
                return false;
            }
        }
        else if (Flag == 1) {
            Txtedit = document.getElementById("field1").value;
         
        }
        else if (Flag == 2) {

            Txtedit = document.getElementById("field2").value;
            if (Txtedit != "") {
                if (!fnEmailCheck1(Txtedit)) {
                    $('#ResultMessage').html('').html('Enter the  valid email id.');
                    document.getElementById("pemailid").focus();
                    $('body,html').animate({ scrollTop: 0 }, 200);
                    $('#ResultMessage').delay(3000).fadeOut(500);
                    return false;
                }
            }
        }
        else if (Flag == 3) {
            Txtedit = document.getElementById("field3").value;
        }
        else if (Flag == 4) {
            Txtedit = document.getElementById("field4").value;
            if (Txtedit == "") {
                $('#ResultMessage').html('').html('Enter the value.');
                document.getElementById("pmobile").focus();
                $('body,html').animate({ scrollTop: 0 }, 200);
                return false;
            }
        }
        else if (Flag == 5) {
            Txtedit = document.getElementById("field5").value;
        }
        else if (Flag == 6) {
            Txtedit = document.getElementById("field6").value;
        }
        else if (Flag == 7) {
            Txtedit = document.getElementById("field7").value;
        }
        else if (Flag == 8) {
            Txtedit = document.getElementById("field8").value;
        }
        else if (Flag == 9) {
            Txtedit = $('select#ddlcountry option:selected').val();
        }
        else if (Flag == 10) {
            Txtedit = $('select#ddlstate option:selected').val();
        }
        else if (Flag == 11) {
            Txtedit = document.getElementById("field11").value;
        }
        else if (Flag == 12) {
            Txtedit = document.getElementById("field12").value;
        }
        else if (Flag == 13) {
            Txtedit = document.getElementById("field13").value;
            if (Txtedit != "") {
                if (!fnEmailCheck1(Txtedit)) {
                    $('#ResultMessage').html('').html('Enter the  valid email id.');
                    document.getElementById("pemailid").focus();
                    $('body,html').animate({ scrollTop: 0 }, 200);
                    $('#ResultMessage').delay(3000).fadeOut(500);
                    return false;
                }
            }
        }
        else if (Flag == 14) {
            Txtedit = document.getElementById("field14").value;

        }
        if (Flag == 15) {
            Txtedit = document.getElementById("field15").value;
        }
        if (Flag == 16) {
            Txtedit = document.getElementById("field16").value;
        }
        if (Flag == 17) {
            Txtedit = document.getElementById("field17").value;
        }
        if (Flag == 18) {
            Txtedit = document.getElementById("field18").value;
        }
        if (Flag == 19) {
            Txtedit = document.getElementById("field19").value;
        }
        if (Flag == 20) {
            Txtedit = $('select#cddlcountry option:selected').val();
        }
        if (Flag == 21) {
            Txtedit = $('select#CddsState1 option:selected').val();
        }
        if (Flag == 22) {
            Txtedit = $('select#ddlIndustry option:selected').val();
        }
        if (Flag == 23) {
            Txtedit = $('select#ddlsource option:selected').val();
        }
        if (Flag == 24) {
            Txtedit = $('select#ddlstatus option:selected').val();
        }
        if (Flag == 25) {
            Txtedit = document.getElementById("field25").value;
        }
        if (Txtedit.trim() == '') {
            $('#ResultMessage').html('').html('Enter the  value.');
            return false;

        }
        var url = '../Lead/DetailEdit';

        var data1 = { "LeadID": LeadID, "Flag": Flag, "txtedit": Txtedit.trim() };
     
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                debugger;
                document.getElementById("field").value = Txtedit;
                details(LeadID);
            }
        });

    }


    function details(LeadID) {
        debugger;
        var imagepath = "../Images/Edit.png";
        var saveimagepath = "../Images/1Right.png";
        var cancelimagepath = "../Images/1wrong.png";
        //  var LeadID = 0;
        var pcountryglo = 0, ccountryglo = 0, IndustryIDglo = 0, SourceIDglo = 0, statusidglo = 0;
        var url = '../Lead/getclientdetail';

        var data1 = { "LeadID": LeadID };
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                $("#Details").html('');


                var item = '';
                if (data.isRedirect == true) {
                    location.href = '../Login/Index';
                }
                for (var i = 0; i < data.length; i++) {
                    debugger;
                    item += ' <div class="ResultMsg1" style="margin-left:40%;">  <div id="ResultMessage" style="height:-3px"></div>    </div>';
                    if (data[i].Name == null) {
                        data[i].Name = '-';
                        item += '<div class="popuptitle">' + data[i].Name + ' - Details</div>';
                    }
                    else {
                        item += '<div class="popuptitle">' + data[i].Name + ' - Details</div>';
                    }
                    if (data[i].leadowner == null) {
                        data[i].leadowner = '-';
                        item += ' <div ><div class="popuplabeldiv"><label>Lead Owner</label></div><div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].leadowner + '</label></div></div>';
                    }
                    else {
                        item += ' <div ><div class="popuplabeldiv"><label>Lead Owner</label></div><div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].leadowner + '</label></div></div>';
                    }
                    if (data[i].CreatedDateTime == null) {
                        data[i].CreatedDateTime = '-';
                        item += ' <div class="leadpopup"><div class="popuplabeldiv"><label>Created Date</label></div><div class="colon">:</div><div class="editor-field">' + data[i].CreatedDateTime + '</div><div class="popupborder"></div></div>';
                    }
                    else {
                        item += ' <div class="leadpopup"><div class="popuplabeldiv"><label>Created Date</label></div><div class="colon">:</div><div class="editor-field">' + data[i].CreatedDateTime + '</div><div class="popupborder"></div></div>';
                    }

                    var photoss = data[i].UserPhotoPath;
                    if (photoss == null) {
                        item += ' <div style="float:right;margin-right:50px;margin-top:-90px"> <img style="border-width:0px;" width="60px" src="@Url.Content("~/Images/human.jpg")" id="ILTabsUC_imgU"></div>';
                    }
                    else {
                        item += ' <div style="float:right;margin-right:50px;margin-top:-90px"> <img style="border-width:0px;" width="70px" src=' + data[i].UserPhotoPath + ' id="ILTabsUC_imgU"></div>';
                    }

                    item += '<div style="margin-left:110px;font-weight:bold;color:#cc3232;font-size:17px;margin-top:5px">Personal Details</div>';
                    if (data[i].FirstName == null) {
                        data[i].FirstName = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>First Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" id="lblncommon"><div id="imgdiv" onmouseover="showimg()" ><label style="font-weight:normal; float:left;"> ' + data[i].FirstName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg" onclick="return showtextbox(0)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '"  alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon"  > <input type="text" maxlength = "25" onkeypress = "myFunction(event)" id="field" maxlength="30"  value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" onclick="return editdetail(0,' + LeadID + ')" style="cursor:pointer" width="20px" width="20px" alt=""/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>First Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv" onmouseover="showimg()" ><label style="font-weight:normal; float:left;"> ' + data[i].FirstName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg" onclick="return showtextbox(0)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon" > <input type="text" maxlength = "25" onkeypress = "myFunction(event)" id="field" maxlength="30" value="' + data[i].FirstName + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" width="20px" alt="" onclick="return editdetail(0,' + LeadID + ')" />&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';

                    }
                    if (data[i].LastName == null || data[i].LastName == '-') {
                        data[i].LastName = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Last Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv1" onmouseover="showimg1()" ><label style="font-weight:normal; float:left;"> ' + data[i].LastName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg1" onclick="return showtextbox(1)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon1"   > <input type="text" maxlength = "25" onkeypress = "myFunction(event)" id="field1" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" width="20px" alt="" onclick="return editdetail(1,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';

                    }
                    else {

                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Last Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv1" onmouseover="showimg1()" ><label style="font-weight:normal; float:left;"> ' + data[i].LastName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg1" onclick="return showtextbox(1)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon1"   > <input type="text" maxlength = "25" onkeypress = "myFunction(event)" id="field1"  value="' + data[i].LastName + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(1,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';

                    }
                    if (data[i].PEmailID == null || data[i].PEmailID == '-') {
                        data[i].PEmailID = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Personal EmailID</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv2" onmouseover="showimg2()" ><label style="font-weight:normal; float:left;"> ' + data[i].PEmailID + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg2" onclick="return showtextbox(2)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon2"   > <input type="text" maxlength = "30" id="field2" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(2,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';

                    }
                    else {

                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Personal EmailID</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv2" onmouseover="showimg2()" ><label style="font-weight:normal; float:left;"> ' + data[i].PEmailID + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg2" onclick="return showtextbox(2)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon2"   > <input type="text" maxlength = "30" id="field2" value="' + data[i].PEmailID + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(2,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';

                    }
                    if (data[i].PPhone == null || data[i].PPhone == '-') {
                        data[i].PPhone = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Phone</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv3" onmouseover="showimg3()" ><label style="font-weight:normal; float:left;"> ' + data[i].PPhone + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg3" onclick="return showtextbox(3)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon3"   > <input type="text" maxlength = "15" onkeypress = "myFunction(event)" id="field3" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(3,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Phone</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv3" onmouseover="showimg3()" ><label style="font-weight:normal; float:left;"> ' + data[i].PPhone + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg3" onclick="return showtextbox(3)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon3"   > <input type="text" id="field3" maxlength = "15" onkeypress = "myFunction(event)" value=' + data[i].PPhone + ' style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(3,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PMobile == null || data[i].PMobile == '-') {
                        data[i].PMobile = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Mobile No</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv4" onmouseover="showimg4()" ><label style="font-weight:normal; float:left;"> ' + data[i].PMobile + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg4" onclick="return showtextbox(4)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon4"   > <input type="text" id="field4" maxlength = "15" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(4,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Mobile No</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv4" onmouseover="showimg4()" ><label style="font-weight:normal; float:left;"> ' + data[i].PMobile + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg4" onclick="return showtextbox(4)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon4"   > <input type="text" id="field4" maxlength = "15" onkeypress = "myFunction(event)" value=' + data[i].PMobile + ' style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(4,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PAddress1 == null || data[i].PAddress1 == '-') {
                        data[i].PAddress1 = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 1</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv5" onmouseover="showimg5()" ><label style="font-weight:normal; float:left;"> ' + data[i].PAddress1 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg5" onclick="return showtextbox(5)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon5"   > <input type="text" maxlength = "30" id="field5" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(5,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 1</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv5" onmouseover="showimg5()" ><label style="font-weight:normal; float:left;"> ' + data[i].PAddress1 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg5" onclick="return showtextbox(5)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon5"   > <input type="text" maxlength = "30" id="field5" value="' + data[i].PAddress1 + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(5,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PAddress2 == null || data[i].PAddress2 == '-') {
                        data[i].PAddress2 = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 2</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv6" onmouseover="showimg6()" ><label style="font-weight:normal; float:left;"> ' + data[i].PAddress2 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg6" onclick="return showtextbox(6)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon6"   > <input type="text" maxlength = "30" id="field6" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(6,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 2</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv6" onmouseover="showimg6()" ><label style="font-weight:normal; float:left;"> ' + data[i].PAddress2 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg6" onclick="return showtextbox(6)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon6"   > <input type="text" maxlength = "30" id="field6" value="' + data[i].PAddress2 + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(6,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PCity == null || data[i].PCity == '-') {
                        data[i].PCity = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>City</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv7" onmouseover="showimg7()" ><label style="font-weight:normal; float:left;"> ' + data[i].PCity + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg7" onclick="return showtextbox(7)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon7"   > <input type="text" maxlength = "30" id="field7"  onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(7,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>City</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv7" onmouseover="showimg7()" ><label style="font-weight:normal; float:left;"> ' + data[i].PCity + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg7" onclick="return showtextbox(7)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon7"   > <input type="text" maxlength = "30" id="field7"  onkeypress = "myFunction(event)" value="' + data[i].PCity + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(7,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PZipCode == null || data[i].PZipCode == '-') {
                        data[i].PZipCode = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Zip Code</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv8" onmouseover="showimg8()" ><label style="font-weight:normal; float:left;"> ' + data[i].PZipCode + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg8" onclick="return showtextbox(8)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon8"   > <input type="text" id="field8"   maxlength = "10" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(8,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Zip Code</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv8" onmouseover="showimg8()" ><label style="font-weight:normal; float:left;"> ' + data[i].PZipCode + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg8" onclick="return showtextbox(8)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon8"   > <input type="text" id="field8" maxlength = "10" onkeypress = "myFunction(event)" value="' + data[i].PZipCode + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(8,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }

                    if (data[i].countryname == null || data[i].countryname == '-') {
                        data[i].countryname = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Country</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv9" onmouseover="showimg9()" ><label id="lblcountry" style="font-weight:normal; float:left;"> ' + data[i].countryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg9" onclick="return showtextbox(9)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon9"   ><select ID="ddlcountry" style="font-weight:normal; width:150px; float:left;"><option selected="selected"> --Select--</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(9,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        CountryID = data[i].CountryID;
                        pcountryglo = CountryID;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Country</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv9" onmouseover="showimg9()" ><label id="lblcountry" style="font-weight:normal; float:left;"> ' + data[i].countryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg9" onclick="return showtextbox(9)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon9"   ><select ID="ddlcountry" onchange="return changesate()" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].CountryID + '> ' + data[i].countryname + '</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(9,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].PState == null || data[i].PState == '-') {
                        data[i].PState = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>State</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv10" onmouseover="showimg10()" ><label style="font-weight:normal; float:left;"> ' + data[i].PState + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg10" onclick="return showtextbox(10)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon10"   > <select ID="ddlstate" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].pstateid + '> ' + data[i].pstateid + '</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(10,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        StateID = data[i].pstateid;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>State</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv10" onmouseover="showimg10()" ><label style="font-weight:normal; float:left;"> ' + data[i].PState + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg10" onclick="return showtextbox(10)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon10"   > <select ID="ddlstate" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].pstateid + '> ' + data[i].pstateid + '</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(10,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    item += ' <div style="margin-left:110px;font-weight:bold;color:#cc3232;font-size:17px;margin-top:5px">Company Details</div>';

                    if (data[i].CCompanyName == null || data[i].CCompanyName == '-') {
                        data[i].CCompanyName = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Company Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv11" onmouseover="showimg11()" ><label style="font-weight:normal; float:left;"> ' + data[i].CCompanyName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg11" onclick="return showtextbox(11)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon11"   > <input type="text" id="field11" maxlength = "30" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(11,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Company Name</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv11" onmouseover="showimg11()" ><label style="font-weight:normal; float:left;"> ' + data[i].CCompanyName + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg11" onclick="return showtextbox(11)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon11"   > <input type="text" maxlength = "30" id="field11" value="' + data[i].CCompanyName + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(11,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CJobTitle == null || data[i].CJobTitle == '-') {
                        data[i].CJobTitle = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Job Title</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv12" onmouseover="showimg12()" ><label style="font-weight:normal; float:left;"> ' + data[i].CJobTitle + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg12" onclick="return showtextbox(12)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon12"   > <input type="text" id="field12"  maxlength = "30" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(12,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Job Title</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv12" onmouseover="showimg12()" ><label style="font-weight:normal; float:left;"> ' + data[i].CJobTitle + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg12" onclick="return showtextbox(12)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon12"   > <input type="text" id="field12"  maxlength = "30" onkeypress = "myFunction(event)" value="' + data[i].CJobTitle + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(12,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CemailID == null || data[i].CemailID == "-") {
                        data[i].CemailID = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Email ID </label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv13" onmouseover="showimg13()" ><label style="font-weight:normal; float:left;"> ' + data[i].CemailID + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg13" onclick="return showtextbox(13)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon13"   > <input type="text" id="field13" maxlength = "30" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(13,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Email ID </label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv13" onmouseover="showimg13()" ><label style="font-weight:normal; float:left;"> ' + data[i].CemailID + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg13" onclick="return showtextbox(13)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon13"   > <input type="text" id="field13" maxlength = "30" value="' + data[i].CemailID + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(13,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CPhone == null || data[i].CPhone == "-") {
                        data[i].CPhone = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Phone </label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv14" onmouseover="showimg14()" ><label style="font-weight:normal; float:left;"> ' + data[i].CPhone + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg14" onclick="return showtextbox(14)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon14"   > <input type="text" id="field14" maxlength = "15" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(14,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Phone </label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv14" onmouseover="showimg14()" ><label style="font-weight:normal; float:left;"> ' + data[i].CPhone + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg14" onclick="return showtextbox(14)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon14"   > <input type="text" id="field14" maxlength = "15" onkeypress = "myFunction(event)" value="' + data[i].CPhone + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(14,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CMobile == null || data[i].CMobile == "-") {
                        data[i].CMobile = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Mobile No</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv15" onmouseover="showimg15()" ><label style="font-weight:normal; float:left;"> ' + data[i].CMobile + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg15" onclick="return showtextbox(15)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon15"   > <input type="text" id="field15" maxlength = "15" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(15,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Mobile No</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv15" onmouseover="showimg15()" ><label style="font-weight:normal; float:left;"> ' + data[i].CMobile + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg15" onclick="return showtextbox(15)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon15"   > <input type="text" id="field15" maxlength = "50" onkeypress = "myFunction(event)" value="' + data[i].CMobile + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(15,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CAddress1 == null || data[i].CAddress1 == "-") {
                        data[i].CAddress1 = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 1</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv25" onmouseover="showimg25()" ><label style="font-weight:normal; float:left;"> ' + data[i].CAddress1 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg25" onclick="return showtextbox(25)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon25"   > <input type="text" id="field25" maxlength = "30" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(25,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 1</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv25" onmouseover="showimg25()" ><label style="font-weight:normal; float:left;"> ' + data[i].CAddress1 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg25" onclick="return showtextbox(25)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon25"   > <input type="text" id="field25" maxlength = "30" value="' + data[i].CAddress1 + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(25,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CAddress2 == null || data[i].CAddress2 == "-") {
                        data[i].CAddress2 = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 2</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv16" onmouseover="showimg16()" ><label style="font-weight:normal; float:left;"> ' + data[i].CAddress2 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg16" onclick="return showtextbox(16)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon16"   > <input type="text" id="field16" maxlength = "30" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(16,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Address 2</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv16" onmouseover="showimg16()" ><label style="font-weight:normal; float:left;"> ' + data[i].CAddress2 + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg16" onclick="return showtextbox(16)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon16"   > <input type="text" id="field16" maxlength = "30" value="' + data[i].CAddress2 + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(16,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CCity == null || data[i].CCity == "-") {
                        data[i].CCity = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>City</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv18" onmouseover="showimg18()" ><label style="font-weight:normal; float:left;"> ' + data[i].CCity + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg18" onclick="return showtextbox(18)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon18"   > <input type="text" id="field18"  maxlength = "30" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(18,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>City</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv18" onmouseover="showimg18()" ><label style="font-weight:normal; float:left;"> ' + data[i].CCity + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg18" onclick="return showtextbox(18)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon18"   > <input type="text" id="field18"  maxlength = "30" onkeypress = "myFunction(event)" value="' + data[i].CCity + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(18,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    if (data[i].CZipCode == null || data[i].CZipCode == "-") {
                        data[i].CZipCode = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Zip Code</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv19" onmouseover="showimg19()" ><label style="font-weight:normal; float:left;"> ' + data[i].CZipCode + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg19" onclick="return showtextbox(19)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon19"   > <input type="text" id="field19" maxlength = "10" onkeypress = "myFunction(event)" value="" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(19,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Zip Code</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv19" onmouseover="showimg19()" ><label style="font-weight:normal; float:left;"> ' + data[i].CZipCode + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg19" onclick="return showtextbox(19)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon19"   > <input type="text" id="field19"  maxlength = "10" onkeypress = "myFunction(event)" value="' + data[i].CZipCode + '" style="font-weight:normal" />&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(19,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }

                    if (data[i].contryname == null) {
                        data[i].contryname = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Country</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv20" onmouseover="showimg20()" ><label style="font-weight:normal; float:left;"> ' + data[i].contryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg20" onclick="return showtextbox(20)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon20"   > <select ID="cddlcountry" return changesate1() style="font-weight:normal; width:150px; float:left;"><option selected="selected"> --Select--</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(20,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        CCountryID = data[i].CcountryID;
                        ccountryglo = CCountryID;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Country</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv20" onmouseover="showimg20()" ><label style="font-weight:normal; float:left;"> ' + data[i].contryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg20" onclick="return showtextbox(20)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon20"   > <select ID="cddlcountry" onchange="return changesate1()" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].CcountryID + ' >' + data[i].contryname + '</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(20,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    debugger;
                    if (data[i].CState == '') {
                        data[i].CState = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>State</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv21" onmouseover="showimg21()" ><label style="font-weight:normal; float:left;"> ' + data[i].CState + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg21" onclick="return showtextbox(21)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon21"   > <select ID="CddsState1" style="font-weight:normal; width:150px; float:left;"><option selected="selected">--Select--</option>--Select-- </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(21,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        CStateID = data[i].Cstateid;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>State</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv21" onmouseover="showimg21()" ><label style="font-weight:normal; float:left;"> ' + data[i].CState + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg21" onclick="return showtextbox(21)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon21"   ><select id="CddsState1" style="font-weight:normal; width:150px; float:left;"><option selected="selected"> </option>--Select-- </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(21,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }


                    if (data[i].industryname == null) {
                        data[i].industryname = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Industry Category</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv22" onmouseover="showimg22()" ><label style="font-weight:normal; float:left;"> ' + data[i].industryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg22" onclick="return showtextbox(22)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon22"   >  <select ID="ddlIndustry" style="font-weight:normal; width:150px; float:left;"><option selected="selected"> --Select--</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(22,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        var IndusID = data[i].IndustryID;
                        IndustryIDglo = IndusID;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Industry Category</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv22" onmouseover="showimg22()" ><label style="font-weight:normal; float:left;"> ' + data[i].industryname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg22" onclick="return showtextbox(22)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon22"   >   <select ID="ddlIndustry" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].IndustryID + ' >' + data[i].industryname + '</select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(22,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    item += ' <div style="margin-left:110px;font-weight:bold;color:#cc3232;font-size:17px;margin-top:5px">Other Details</div>';
                    if (data[i].sourcename == null) {
                        data[i].sourcename = '-';
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Source</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv23" onmouseover="showimg23()" ><label style="font-weight:normal; float:left;"> ' + data[i].sourcename + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg23" onclick="return showtextbox(23)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon23"   >  <select ID="ddlsource" style="font-weight:normal; width:150px; float:left;"><option selected="selected"> ---Select-</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(23,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        var SourceID = data[i].SourceID;
                        SourceIDglo = SourceID;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Source</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv23" onmouseover="showimg23()" ><label style="font-weight:normal; float:left;"> ' + data[i].sourcename + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg23" onclick="return showtextbox(23)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon23"   >   <select ID="ddlsource" style="font-weight:normal; width:150px; float:left;"><option selected="selected"  value=' + data[i].SourceID + ' >' + data[i].sourcename + '</select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(23,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }

                    if (data[i].statusname == null) {
                        data[i].statusname

                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Status</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv24" onmouseover="showimg24()" ><label style="font-weight:normal; float:left;"> ' + data[i].statusname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg24" onclick="return showtextbox(24)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon24"   >  <select ID="ddlstatus" style="font-weight:normal; width:150px; float:left;"><option selected="selected"> --Select--</option> </select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(24,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
                    else {
                        var statusid = data[i].statusid
                        statusidglo = statusid;
                        item += '<div style="margin-top:5px;width:100%; "><div  class="popuplabeldiv"><label>Status</label></div><div class="colon">:</div>';
                        item += '<div class="editor-field" ><div id="imgdiv24" onmouseover="showimg24()" ><label style="font-weight:normal; float:left;"> ' + data[i].statusname + '</label>&nbsp&nbsp&nbsp&nbsp';
                        item += '<a id="lnkshowimg24" onclick="return showtextbox(24)"  style="display:none; float:left;padding-left: 5px;cursor: pointer;"   title="Modify"><img src="' + imagepath + '" alt=""/></a></div></div>';
                        item += '<div class="editor-field" style="display:none; " id="txtncommon24"   >   <select ID="ddlstatus" style="font-weight:normal; width:150px; float:left;"><option selected="selected" value=' + data[i].statusid + ' >' + data[i].statusname + '</select>&nbsp&nbsp&nbsp';
                        item += '<img src="' + saveimagepath + '" style="cursor:pointer" width="20px" alt="" onclick="return editdetail(24,' + LeadID + ')"/>&nbsp&nbsp&nbsp<img src="' + cancelimagepath + '" style="cursor:pointer" width="20px" onclick="return Cancel(' + LeadID + ')"/></div></div>';
                    }
//                    if (data[i].FollowupDate == "01/01/1900" && data[i].interactionname == null && data[i].Notes == "-") {
//                    }
//                    else {
//                        item += ' <div style="margin-left:110px;font-weight:bold;color:#cc3232;font-size:17px;margin-top:5px">Followup  Details</div><div class="editor-field"></div>';

//                    }
//                    if (data[i].FollowupDate == null || data[i].FollowupDate == "01/01/1900") {
//                        //                    data[i].FollowupDate = '-';
//                        //                    item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Followup Date</label> </div> <div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].FollowupDate + '</label></div></div>';
//                    }
//                    else {
//                        item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Followup Date</label> </div> <div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].FollowupDate + '</label></div></div>';
//                    }
//                    if (data[i].interactionname == null || data[i].interactionname == 0) {
//                        //                    data[i].interactionname = '-';
//                        //                    item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Interaction Type</label> </div> <div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].interactionname + '</label></div></div>';
//                    }
//                    else {
//                        item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Interaction Type</label> </div> <div class="colon">:</div><div class="editor-field"><label style="font-weight:normal">' + data[i].interactionname + '</label></div></div>';
//                    }
//                    if (data[i].Notes == null || data[i].Notes == "-") {
//                        //                    data[i].Notes = '-';
//                        //                    item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Notes</label> </div> <div class="colon">:</div><div class="editor-field notes"><label style="font-weight:normal">' + data[i].Notes + '</label></div></div>';
//                    }
//                    else {
//                        item += ' <div class="leadpopup"><div  class="popuplabeldiv"><label>Notes</label> </div> <div class="colon">:</div><div class="editor-field notes"><label style="font-weight:normal">' + data[i].Notes + '</label></div></div>';
//                    }

                    item += ' <div style="margin-left:40%;margin-top:14px" ><input type="button"  class="btn btn-primary" value="Close"  onclick="return closepopupenq1()" /></div>';
                    if (data[i].UserPhotoPath == null || data[i].UserPhotoPath == '') {
                    }

                    else {

                        $('#ILTabsUC_imgU').attr("src", photoss);
                    }
                }


                $("#Details").append(item);
                if (data.length == 0) {
                    $("#Details").html('');
                }
            }

        });
    
       
        var url = '../Lead/Bindddl';
        var data1 = { "SearchString": "" };
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                //debugger;
                for (var i = 0; i < data.length; i++) {
                    if (pcountryglo != data[i].CountryID) {
                        $("#ddlcountry").append($("<option></option>").val(data[i].CountryID).html(data[i].CountryName));
                    }
                    if (ccountryglo != data[i].CountryID) {
                        $("#cddlcountry").append($("<option></option>").val(data[i].CountryID).html(data[i].CountryName));
                    }
                }
            }
        });
      
        url = '../Lead/Bindddlstatus';

        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (statusidglo != data[i].StatusID) {
                        $("#ddlstatus").append($("<option></option>").val(data[i].StatusID).html(data[i].StatusName));
                    } 
                }
            }
        });
        url = '../Lead/Bindddlsource';
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (SourceIDglo != data[i].SourceID) {
                        $("#ddlsource").append($("<option></option>").val(data[i].SourceID).html(data[i].SourceName));
                    } 
                }
            }
        });
        //url = '../Bindddlinteraction/Lead';
        //$.ajax({
        //    'async': false,
        //    'type': "POST",
        //    'global': false,
        //    'dataType': 'json',
        //    'url': url,
        //    'data': data1,
        //    'success': function (data) {
        //        for (var i = 0; i < data.length; i++) {
        //            $("#ddlinteraction").append($("<option></option>").val(data[i].InteractionID).html(data[i].InteractionName));
        //            $("#ddlinteraction").val(data[0].InteractionID);
        //        }
        //    }
        //});
        url = '../Lead/Bindddlindustry';
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {

                for (var i = 0; i < data.length; i++) {
                    if (IndustryIDglo != data[i].IndustryID) {
                        $("#ddlIndustry").append($("<option></option>").val(data[i].IndustryID).html(data[i].IndustryName));
                    }
                }
            }
        });
        url = '../Lead/Bindddlstate';
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'json',
            'url': url,
            'data': data1,
            'success': function (data) {
                for (var i = 0; i < data.length; i++) {
                    $("#ddlstate").append($("<option></option>").val(data[i].StateID).html(data[i].StateName));
                 
                }
            }
        });


        //url = '../Lead/Bindddlstate1';
        //$.ajax({
        //    'async': false,
        //    'type': "POST",
        //    'global': false,
        //    'dataType': 'json',
        //    'url': url,
        //    'data': data1,
        //    'success': function (data) {
        //        for (var i = 0; i < data.length; i++) {
           
        //            $("#CddsState1").append($("<option></option>").val(data[i].StateID).html(data[i].StateName));
        //        }
        //    }
        //});
    }

    function myFunction(evt) {

        $('#field').keyup(function () {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
            }
        });

        $('#field1').keyup(function () {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
            }
        });

        $('#field3').keyup(function () {
            if (this.value.match(/[^0-9+-]/g)) {
                this.value = this.value.replace(/[^0-9+-]/g, '');
            }
        });
        $('#field4').keyup(function () {
            if (this.value.match(/[^0-9-+]/g)) {
                this.value = this.value.replace(/[^0-9-+]/g, '');
            }
        });

        $('#field8').keyup(function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        $('#field7').keyup(function () {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
            }
        });



        $('#field12').keyup(function () {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
            }
        });




        $('#field14').keyup(function () {
            if (this.value.match(/[^0-9+-]/g)) {
                this.value = this.value.replace(/[^0-9+-]/g, '');
            }
        });

        $('#field15').keyup(function () {
            if (this.value.match(/[^0-9-+]/g)) {
                this.value = this.value.replace(/[^0-9-+]/g, '');
            }
        });

        $('#field19').keyup(function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });

        $('#field18').keyup(function () {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
            }
        });
    }

   
//************************************__________________Mani__________________************************/
