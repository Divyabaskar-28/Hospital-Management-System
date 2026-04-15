
function datatoHTML(data) {
    debugger;
    var item = "";
    var RoleID = parseInt($("#Country :selected").val());
    if (RoleID == 1) {
        item += "<tr><th>#</th><th>Capability</th><th style=text-align:center; colspan=2><div style='width:20%; float:left; text-align:left; margin-left:10px'>Rights</div> <div style='float:right;margin-right: 1%;'>Select all</div><input type='checkbox' disabled id='selectAll' style='float:right;margin-right: 2%;' onclick='return selectAllRole(this)'></th></tr>";
    }
    else {
        item += "<tr><th>#</th><th>Capability</th><th style=text-align:center; colspan=2><div style='width:20%; float:left; text-align:left; margin-left:10px'>Rights</div> <div style='float:right;margin-right: 1%;'>Select all</div><input type='checkbox' id='selectAll' style='float:right;margin-right: 2%;' onclick='return selectAllRole(this)'></th></tr>";
    }
    for (var i = 0; i < data.length; i++) {
        debugger;
        var sno = parseInt(i) + 1
        item += "<tr >";
        item += "<td>" + sno + "</td>";
        item += "<td>" + data[i].MenuName + "</td>";
        item += "<td>";
        item += "<div id=SA" + i + ">";
        var permisson = data[i].Permission.split(',');
        var chkcount = 0;
        for (var j = 0; j < permisson.length; j++) {
            if (i == 0) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (RoleID == 1) {
                        if (permisson[j] == 1) {
                            chkcount = chkcount + 1;
                            item += '<div style="float:left; margin-left:8px;"> <input class="check" disabled type="checkbox" onclick="return singleclick()" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        } else {
                            item += '<div style="float:left; margin-left:8px;"><input  class="check" disabled type="checkbox" onclick="return singleclick()" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        }
                    }
                    else {
                        if (permisson[j] == 1) {
                            chkcount = chkcount + 1;
                            item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                            if (j == 3)
                                item += "</div>";
                        }
                        else {
                            item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                            if (j == 3)
                                item += "</div>";
                        }
                    }
                }
                else {
                    if (chkcount == 4)
                        if (RoleID == 1) {
                            item += '<div style="float:right; margin-right:4px;"> <input type="checkbox"  class="check" disabled onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                        }
                        else {
                            item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                        }
                    else
                        if (RoleID == 1) {
                            item += '<div style="float:right; margin-right:4px;"> <input type="checkbox"  class="check" disabled onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                        }
                        else {
                            item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                        }
                }
            }

            if (i == 1) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }
            if (i == 2) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 3) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";

                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 4) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }
            if (i == 5) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 6) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

           

            if (i == 7) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            


            if (i == 8) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 9) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 10) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }

            if (i == 11) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }


            if (i == 12) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }


            if (i == 13) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Download";
                else if (j == 3)
                    str = "Delete";
                if (j != 4) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 3)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 3)
                            item += "</div>";
                    }
                }
                else {
                    if (chkcount == 4)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + 'Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + 'Select All</div> ';
                }
            }


            if (i == 14) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }

            if (i == 15) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }


            if (i == 16) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }

            if (i == 17) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                else if (j == 4)
                    str = "Update";
                if (j != 5) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 4)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 4)
                            item += "</div>";
                    }
                }
                if (j == 4) {
                    if (chkcount == 5)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp Select All</div> ';
                }
            }

            if (i == 18) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                else if (j == 4)
                    str = "Update";
                if (j != 5) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 4)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 4)
                            item += "</div>";
                    }
                }
                if (j == 4) {
                    if (chkcount == 5)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp Select All</div> ';
                }
            }

            if (i == 19) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }

            if (i == 20) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                else if (j == 4)
                    str = "Update";
                if (j != 5) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 4)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 4)
                            item += "</div>";
                    }
                }
                if (j == 4) {
                    if (chkcount == 5)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp Select All</div> ';
                }
            }


            if (i == 21) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "View";
                else if (j == 1)
                    str = "Add";
                else if (j == 2)
                    str = "Modify";
                else if (j == 3)
                    str = "Delete";
                else if (j == 4)
                    str = "Update";
                if (j != 5) {
                    if (permisson[j] == 1) {
                        chkcount = chkcount + 1;
                        item += '<div style="float:left; margin-left:8px;"> <input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        if (j == 4)
                            item += "</div>";
                    }
                    else {
                        item += '<div style="float:left; margin-left:8px;"><input  class="check check1" type="checkbox" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                        if (j == 4)
                            item += "</div>";
                    }
                }
                if (j == 4) {
                    if (chkcount == 5)
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp Select All</div> ';
                    else
                        item += '<div style="float:right; margin-right:4px;"> <input id="SSA' + i + '" type="checkbox"  class="check" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp Select All</div> ';
                }
            }

            if (i == 22) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }
            }


           


            if (i == 23) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }

            }

            if (i == 24) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }

            }
            if (i == 25) {
                //                if (j == 0) {
                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>>>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked>&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';

                    } 
                }
                //                else {
                //                    item += '<div style="float:left; margin-left:8px; display:none;"><input type="checkbox" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                //                }
            }
            
           

            if (i == 26) {
                
                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" />&nbsp&nbsp&nbsp' + str + ' </div>';
                 
                    }
                }
            }

            if (i == 27) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>>>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked />&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" />&nbsp&nbsp&nbsp' + str + ' </div>';

                    }
                }
                //                else {
                //                    item += '<div style="float:left; margin-left:8px; display:none;"><input type="checkbox" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                //                }
            }

            if (i == 28) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>>>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked />&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" />&nbsp&nbsp&nbsp' + str + ' </div>';

                    }
                }
                //                else {
                //                    item += '<div style="float:left; margin-left:8px; display:none;"><input type="checkbox" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                //                }
            }

            if (i == 29) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>>>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked />&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" />&nbsp&nbsp&nbsp' + str + ' </div>';

                    }
                }
                //                else {
                //                    item += '<div style="float:left; margin-left:8px; display:none;"><input type="checkbox" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                //                }
            }


            
            if (i == 30) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>>>' + defVal;
                if (j == 0)
                    str = "All";
                else if (j == 1)
                    str = "Self";
                if (j < 2) {
                    if (str == 'All') {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                        else
                            item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" id="SSA' + i + '" onclick="return rowsingleclick(this,' + i + ')" value="' + defVal + '" />&nbsp&nbsp ' + str + '</div> ';
                    }
                    else {
                        if (permisson[j] == 1)
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" checked />&nbsp&nbsp&nbsp' + str + ' </div>';
                        else
                            item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclickSelfClick(SA' + i + ')" value="' + defVal + '" />&nbsp&nbsp&nbsp' + str + ' </div>';

                    }
                }
            }

            if (i == 31) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }

            }

            if (i == 32) {

                var str = "", defVal = j + 1;
                defVal = data[i].MenuID + '>' + defVal;
                if (j == 0) {
                    str = "View";

                    if (permisson[j] == 1)
                        item += '<div style="float:left; margin-left:8px;"> <input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '" checked/>&nbsp&nbsp ' + str + '</div> ';
                    else
                        item += '<div style="float:left; margin-left:8px;"><input type="checkbox"  class="check" onclick="return singleclick(SA' + i + ')" value="' + defVal + '">&nbsp&nbsp&nbsp' + str + ' </div>';
                }

            }

           

        }
        item += "</td>";
        item += "</tr>";

    }
    return item;

}

