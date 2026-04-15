// variables
var canvas, ctx;
var image;
var iMouseX, iMouseY = 1;
var theSelection;
function getFile() {
     

    $('.divPopupBackground').css({ 'height': (document.documentElement.scrollHeight | document.body.scrollHeight) + 'px', 'display': 'block' });

    var iframeDocument = document.getElementById('iframe');
    iframeDocument = iframeDocument.contentDocument || iframeDocument.contentWindow.document;
    iframeDocument.getElementsByTagName('body')[0].innerHTML = '';
    var form = iframeDocument.createElement('form');
    iframeDocument.body.appendChild(form);
    form.setAttribute('action', '../../AsyncCall.aspx');
    form.setAttribute('method', 'POST');
    form.setAttribute('enctype', 'multipart/form-data');
    var element = document.getElementById('fudImage');
    var fakepath = element.value.replace("C:\\fakepath\\", '');
    form.appendChild(element);
    form.submit();
    timer = setInterval('getData()', 500);
    var div = document.getElementById('divCon');
    var fil = document.createElement('input');
    fil.setAttribute('type', 'file');
    fil.setAttribute('id', 'fudImage');
    fil.setAttribute('name', 'fudImage');
    //fil.setAttribute('class', 'browserControl');
    fil.style.display = 'block';
    fil.setAttribute('onchange', 'getFile()');
    div.appendChild(fil);
    //  var img = document.getElementById('my-origin-image1');

    return true;



}
function getData() {

    var iFrameBody;
    var iframeDocument = document.getElementById('iframe');
    if (iframeDocument.contentDocument) {
        iFrameBody = iframeDocument.contentDocument.getElementsByTagName('body')[0];
        fileName = $.trim(iFrameBody.innerHTML);
    }
    else if (iframeDocument.contentWindow) {
        iFrameBody = iframeDocument.contentWindow.document.getElementsByTagName('body')[0];
        fileName = $.trim(iFrameBody.innerHTML);
    }
    if (fileName != '') {
        //                fileName = unescape($.trim(iFrameBody.innerHTML).split(',')[1]);
        fileZize = escape($.trim(iFrameBody.innerHTML).split(',')[0]);
        if (!isNaN(fileZize)) {
            clearInterval(timer);
            timer = null;

            if (parseInt(escape(fileZize / (1024 * 1024))) > 10) {

                document.getElementById('imgpreview').src = fileName;
                fileName = '';
                fileZize = 0;
                document.getElementById('hiddeimgpath').value = '';
            }
            else {


                fileZize = 0;
                var Fundingitem = '', FundingCount = 0, FunDocPath, FunServerDocName, FunOriginalFileName, FunDocFileName, Fundingorgname;

                FunDocFileName = fileName.match("var DocFileName='(.*)';var DestFilePath=");
                if (FunDocFileName == null) {
                    $('#cropmsg').html('').html('Select the file range between 650*450.');
                    return false;
                }
                FunDocFileName = FunDocFileName[1];

                FunDocPath = fileName.match("var DestFilePath='(.*)';var DestFileName=");
                FunDocPath = FunDocPath[1];

                FunDocPath = FunDocPath.match("UploadFiles(.*)");
                FunDocPath = FunDocPath[1].substr(1, FunDocPath[1].length - 1);

                FunDocPath = '../../UploadFiles/' + FunDocPath;


                var DivID = FunDocPath.split(';');
                DivID = DivID[0];

                DivID = DivID.replace('\'', '');
                var filename = DivID.replace('../../', '~');

                // document.getElementById('my-origin-image1').src = '../ImageCreation.ashx?image=' + filename + '&type=logo';
                //  document.getElementById('imgload').src = '../ImageCreation.ashx?image=' + filename + '&type=profile';

                $("#imgpreview").attr("src", DivID);
                document.getElementById('hiddeimgpath').value = DivID;
                //  var img = document.getElementById('my-origin-image1');
                var img = $('imgpreview');
                // Original
                var width, height;

                // Display
                var d_width = img.width();
                var d_height = img.height();

                if (d_width > 600) {
                    alert(d_width);
                    $("#imgpreview").attr("src", "");
                    return false;
                }
                if (d_height > 450) {
                    alert(d_height);
                    $("#imgpreview").attr("src", "");
                    return false;
                }
                initcrop();
                //$("#my-origin-image1").removeAttr("style");
            }
        }
    }
}


// define Selection constructor
function Selection(x, y, w, h) {

    this.x = x; // initial positions
    this.y = y;
    this.w = w; // and size
    this.h = h;

    this.px = x; // extra variables to dragging calculations
    this.py = y;

    this.csize = 6; // resize cubes size
    this.csizeh = 10; // resize cubes size (on hover)

    this.bHow = [false, false, false, false]; // hover statuses
    this.iCSize = [this.csize, this.csize, this.csize, this.csize]; // resize cubes sizes
    this.bDrag = [false, false, false, false]; // drag statuses
    this.bDragAll = false; // drag whole selection
}

// define Selection draw method
Selection.prototype.draw = function () {

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(this.x, this.y, this.w, this.h);

    // draw part of original image
    if (this.w > 0 && this.h > 0) {
        ctx.drawImage(image, this.x, this.y, this.w, this.h, this.x, this.y, this.w, this.h);
    }

    // draw resize cubes
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x - this.iCSize[0], this.y - this.iCSize[0], this.iCSize[0] * 2, this.iCSize[0] * 2);
    ctx.fillRect(this.x + this.w - this.iCSize[1], this.y - this.iCSize[1], this.iCSize[1] * 2, this.iCSize[1] * 2);
    ctx.fillRect(this.x + this.w - this.iCSize[2], this.y + this.h - this.iCSize[2], this.iCSize[2] * 2, this.iCSize[2] * 2);
    ctx.fillRect(this.x - this.iCSize[3], this.y + this.h - this.iCSize[3], this.iCSize[3] * 2, this.iCSize[3] * 2);
}

function drawScene() { // main drawScene function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clear canvas
    var width = $('#imgpreview').width();
    var height = $('#imgpreview').height();
    // draw source image
    ctx.drawImage(image, 0, 0, width, height);

    // and make it darker
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height);


    // draw selection
    theSelection.draw();
}

function initcrop() {
    var img = document.getElementById('imgpreview');
    // var fl = document.getElementById('imgpreview');
    // loading source image
    image = new Image();
    image.onload = function () {
    }
    image.src = $('#imgpreview').attr('src');
    canvas = document.getElementById('panel1');
    ctx = canvas.getContext('2d');
    // create initial selection
    theSelection = new Selection(40, 40, 40, 40);

    $('#panel1').mousemove(function (e) { // binding mouse move event
        var canvasOffset = $(canvas).offset();
        iMouseX = Math.floor(e.pageX - canvasOffset.left);
        iMouseY = Math.floor(e.pageY - canvasOffset.top);

        // in case of drag of whole selector
        if (theSelection.bDragAll) {
            theSelection.x = iMouseX - theSelection.px;
            theSelection.y = iMouseY - theSelection.py;
        }

        for (i = 0; i < 4; i++) {
            theSelection.bHow[i] = false;
            theSelection.iCSize[i] = theSelection.csize;
        }

        // hovering over resize cubes
        if (iMouseX > theSelection.x - theSelection.csizeh && iMouseX < theSelection.x + theSelection.csizeh &&
            iMouseY > theSelection.y - theSelection.csizeh && iMouseY < theSelection.y + theSelection.csizeh) {

            theSelection.bHow[0] = true;
            theSelection.iCSize[0] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x + theSelection.w - theSelection.csizeh && iMouseX < theSelection.x + theSelection.w + theSelection.csizeh &&
            iMouseY > theSelection.y - theSelection.csizeh && iMouseY < theSelection.y + theSelection.csizeh) {

            theSelection.bHow[1] = true;
            theSelection.iCSize[1] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x + theSelection.w - theSelection.csizeh && iMouseX < theSelection.x + theSelection.w + theSelection.csizeh &&
            iMouseY > theSelection.y + theSelection.h - theSelection.csizeh && iMouseY < theSelection.y + theSelection.h + theSelection.csizeh) {

            theSelection.bHow[2] = true;
            theSelection.iCSize[2] = theSelection.csizeh;
        }
        if (iMouseX > theSelection.x - theSelection.csizeh && iMouseX < theSelection.x + theSelection.csizeh &&
            iMouseY > theSelection.y + theSelection.h - theSelection.csizeh && iMouseY < theSelection.y + theSelection.h + theSelection.csizeh) {

            theSelection.bHow[3] = true;
            theSelection.iCSize[3] = theSelection.csizeh;
        }

        // in case of dragging of resize cubes
        var iFW, iFH;
        if (theSelection.bDrag[0]) {

            var iFX = iMouseX - theSelection.px;
            var iFY = iMouseY - theSelection.py;
            iFW = theSelection.w + theSelection.x - iFX;
            iFH = theSelection.h + theSelection.x - iFX;

        }
        if (theSelection.bDrag[1]) {

            var iFX = theSelection.x;
            var iFY = iMouseY - theSelection.py;
            iFW = iMouseX - theSelection.px - iFX;
            iFH = theSelection.h + theSelection.y - iFY;
            iFW = iFH;
        }
        if (theSelection.bDrag[2]) {

            var iFX = theSelection.x;
            var iFY = theSelection.y;
            iFW = iMouseX - theSelection.px - iFX;
            iFH = iMouseY - theSelection.py - iFY;
            iFW = iFH;
        }
        if (theSelection.bDrag[3]) {

            var iFX = iMouseX - theSelection.px;
            var iFY = theSelection.y;
            iFW = theSelection.w + theSelection.x - iFX;
            iFH = iMouseY - theSelection.py - iFY;
            iFW = iFH;
        }

        if (iFW > theSelection.csizeh * 2 && iFH > theSelection.csizeh * 2) {
            theSelection.w = iFW;
            theSelection.h = iFH;

            theSelection.x = iFX;
            theSelection.y = iFY;
        }

        drawScene();
    });

    $('#panel1').mousedown(function (e) { // binding mousedown event
        var canvasOffset = $(canvas).offset();
        iMouseX = Math.floor(e.pageX - canvasOffset.left);
        iMouseY = Math.floor(e.pageY - canvasOffset.top);

        theSelection.px = iMouseX - theSelection.x;
        theSelection.py = iMouseY - theSelection.y;

        if (theSelection.bHow[0]) {
            theSelection.px = iMouseX - theSelection.x;
            theSelection.py = iMouseY - theSelection.y;
        }
        if (theSelection.bHow[1]) {
            theSelection.px = iMouseX - theSelection.x - theSelection.w;
            theSelection.py = iMouseY - theSelection.y;
        }
        if (theSelection.bHow[2]) {
            theSelection.px = iMouseX - theSelection.x - theSelection.w;
            theSelection.py = iMouseY - theSelection.y - theSelection.h;
        }
        if (theSelection.bHow[3]) {
            theSelection.px = iMouseX - theSelection.x;
            theSelection.py = iMouseY - theSelection.y - theSelection.h;
        }


        if (iMouseX > theSelection.x + theSelection.csizeh && iMouseX < theSelection.x + theSelection.w - theSelection.csizeh &&
            iMouseY > theSelection.y + theSelection.csizeh && iMouseY < theSelection.y + theSelection.h - theSelection.csizeh) {

            theSelection.bDragAll = true;
        }

        for (i = 0; i < 4; i++) {
            if (theSelection.bHow[i]) {
                theSelection.bDrag[i] = true;
            }
        }
    });

    $('#panel1').mouseup(function (e) { // binding mouseup event
        theSelection.bDragAll = false;

        for (i = 0; i < 4; i++) {
            theSelection.bDrag[i] = false;
        }
        theSelection.px = 0;
        theSelection.py = 0;
    });

    drawScene();
}

var des;
function getResults() {
    var temp_ctx, temp_canvas;
    temp_canvas = document.createElement('canvas');
    temp_ctx = temp_canvas.getContext('2d');
    temp_canvas.width = theSelection.w;
    temp_canvas.height = theSelection.h;
    temp_ctx.drawImage(image, theSelection.x, theSelection.y, theSelection.w, theSelection.h, 0, 0, theSelection.w, theSelection.h);
    var vData = temp_canvas.toDataURL("image/jpeg");
    // Canvas2Image.saveAsPNG(temp_canvas);

    des = vData;
    $('#crop_result').attr('src', vData);
    $('#btnimgSave').css({ 'display': 'block' });
    $('#img1').attr('src', vData);
    //  $('#results h2').text('Well done, we have prepared our cropped image, now you can save it if you wish');


    ////    var image1 = temp_canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    ////    alert(image1);
    ////    window.location.href = image1;
    //    var image1 = new Image();
    //    image1.src = temp_canvas.toDataURL("image/png");
    //    alert(image1.src);
    return false;
}

//function putImage() {

//    var url = '@Url.Action("Bindddlindustry", "Lead")';
//    var data1 = { "SearchString": "" };
//    $.post(url, data1, function (data) {
//         
//        $('#ddlIndustry option').remove();

//        $("#ddlIndustry").append($("<option></option>").val("0").html("Select"));
//        for (var i = 0; i < data.length; i++) {
//            $("#ddlIndustry").append($("<option></option>").val(data[i].IndustryID).html(data[i].IndustryName));


//        }
//    });
//}

function putImage() {

    var image1 = des;

    image1 = image1.replace('data:image/jpeg;base64,', '');

    $.ajax({
        type: 'POST',
        url: '../../CanvasSave.aspx/UploadImage',
        data: '{ "imageData" : "' + image1 + '" }',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) {

            var ChkData = msg.d;

            var owidth = 250;
            var oheight = 250;
            var tumbsize = 40;
            if ((owidth / tumbsize) > (oheight / tumbsize)) {
                var newHeight = (oheight * (tumbsize / owidth));
                var newWidth = tumbsize;
            }
            else {
                newHeight = tumbsize;
                newWidth = (owidth * (tumbsize / oheight));

            }
            var rep = "../../UploadFiles/ProfilePhotos/" + ChkData;
            var replace = "~/UploadFiles/ProfilePhotos/" + ChkData;
            $('#imgview').attr('src', rep);
            $('#imgview').attr('width', newWidth);
            $('#imgview').attr('height', newHeight);
            $('#hdnImageName').val(replace);
            // document.getElementById('imgview').setAttribute('src', rep);
            ////           document.getElementById('imgview').setAttribute('width', newWidth);
            ////           document.getElementById('imgview').setAttribute('height', newHeight);
            //  alert(rep);
            $('.container').css({ 'display': 'none' });
            $('.divPopupBackground').css({ 'display': 'none' });
        }
    });

}


