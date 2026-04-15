

function QstringBind() {
    var RoleID = $('#ddlrole').val();
    if (RoleID == 0) {
        not2("Please select the user role.");
        $('#ddlrole').focus();
        $('body,html').animate({ scrollTop: 0 }, 0);
        return false;
    }

    //var RoleID = 1;

    var MUAdd = $('#MUAdd').is(":checked") ? 1 : 0;
    var MUModify = $('#MUModify').is(":checked") ? 1 : 0;
    var MUDelete = $('#MUDelete').is(":checked") ? 1 : 0;
    var MUView = $('#MUView').is(":checked") ? 1 : 0;
    var MUDownload = 0;
    var MUMenuID = 1;
    var MUValue = ' (' + RoleID + ',' + MUMenuID + ',' + MUMenuID + ',' + MUAdd + ',' + MUModify + ',' + MUDelete + ',' + MUView + ',' + MUDownload + ',' + MUMenuID + '),';

    var URAdd = $('#URAdd').is(":checked") ? 1 : 0;
    var URModify = $('#URModify').is(":checked") ? 1 : 0;
    var URDelete = $('#URDelete').is(":checked") ? 1 : 0;
    var URView = $('#URView').is(":checked") ? 1 : 0;
    var URDownload = 0;
    var URMenuID = 2;
    var URValue = ' (' + RoleID + ',' + URMenuID + ',' + URMenuID + ',' + URAdd + ',' + URModify + ',' + URDelete + ',' + URView + ',' + URDownload + ',' + URMenuID + '),';

    var RVCAdd = $('#RVCAdd').is(":checked") ? 1 : 0;
    var RVCModify = $('#RVCModify').is(":checked") ? 1 : 0;
    var RVCDelete = $('#RVCDelete').is(":checked") ? 1 : 0;
    var RVCView = $('#RVCView').is(":checked") ? 1 : 0;
    var RVCDownload = 0;
    var RVCMenuID = 3;
    var RVCValue = ' (' + RoleID + ',' + RVCMenuID + ',' + RVCMenuID + ',' + RVCAdd + ',' + RVCModify + ',' + RVCDelete + ',' + RVCView + ',' + RVCDownload + ',' + RVCMenuID + '),';

    var UARAdd = $('#UARAdd').is(":checked") ? 1 : 0;
    var UARModify = $('#UARModify').is(":checked") ? 1 : 0;
    var UARDelete = $('#UARDelete').is(":checked") ? 1 : 0;
    var UARView = $('#UARView').is(":checked") ? 1 : 0;
    var UARDownload = 0;
    var UARMenuID = 4;
    var UARValue = ' (' + RoleID + ',' + UARMenuID + ',' + UARMenuID + ',' + UARAdd + ',' + UARModify + ',' + UARDelete + ',' + UARView + ',' + UARDownload + ',' + UARMenuID + '),';

    var NatAdd = $('#NatAdd').is(":checked") ? 1 : 0;
    var NatModify = $('#NatModify').is(":checked") ? 1 : 0;
    var NatDelete = $('#NatDelete').is(":checked") ? 1 : 0;
    var NatView = $('#NatView').is(":checked") ? 1 : 0;
    var NatDownload = 0;
    var NatMenuID = 5;
    var NatValue = ' (' + RoleID + ',' + NatMenuID + ',' + NatMenuID + ',' + NatAdd + ',' + NatModify + ',' + NatDelete + ',' + NatView + ',' + NatDownload + ',' + NatMenuID + '),';

    var STATAdd = $('#STATAdd').is(":checked") ? 1 : 0;
    var STATModify = $('#STATModify').is(":checked") ? 1 : 0;
    var STATDelete = $('#STATDelete').is(":checked") ? 1 : 0;
    var STATView = $('#STATView').is(":checked") ? 1 : 0;
    var STATDownload = 0;
    var STATMenuID = 6;
    var STATValue = ' (' + RoleID + ',' + STATMenuID + ',' + STATMenuID + ',' + STATAdd + ',' + STATModify + ',' + STATDelete + ',' + STATView + ',' + STATDownload + ',' + STATMenuID + '),';

    var CITYAdd = $('#CITYAdd').is(":checked") ? 1 : 0;
    var CITYModify = $('#CITYModify').is(":checked") ? 1 : 0;
    var CITYDelete = $('#CITYDelete').is(":checked") ? 1 : 0;
    var CITYView = $('#CITYView').is(":checked") ? 1 : 0;
    var CITYDownload = 0;
    var CITYMenuID = 7;
    var CITYValue = ' (' + RoleID + ',' + CITYMenuID + ',' + CITYMenuID + ',' + CITYAdd + ',' + CITYModify + ',' + CITYDelete + ',' + CITYView + ',' + CITYDownload + ',' + CITYMenuID + '),';

    var CSTAdd = $('#CSTAdd').is(":checked") ? 1 : 0;
    var CSTModify = $('#CSTModify').is(":checked") ? 1 : 0;
    var CSTDelete = $('#CSTDelete').is(":checked") ? 1 : 0;
    var CSTView = $('#CSTView').is(":checked") ? 1 : 0;
    var CSTDownload = 0;
    var CSTMenuID = 8;
    var CSTValue = ' (' + RoleID + ',' + CSTMenuID + ',' + CSTMenuID + ',' + CSTAdd + ',' + CSTModify + ',' + CSTDelete + ',' + CSTView + ',' + CSTDownload + ',' + CSTMenuID + '),';

    var HOSAdd = $('#HOSAdd').is(":checked") ? 1 : 0;
    var HOSModify = $('#HOSModify').is(":checked") ? 1 : 0;
    var HOSDelete = $('#HOSDelete').is(":checked") ? 1 : 0;
    var HOSView = $('#HOSView').is(":checked") ? 1 : 0;
    var HOSDownload = 0;
    var HOSMenuID = 9;
    var HOSValue = ' (' + RoleID + ',' + HOSMenuID + ',' + HOSMenuID + ',' + HOSAdd + ',' + HOSModify + ',' + HOSDelete + ',' + HOSView + ',' + HOSDownload + ',' + HOSMenuID + '),';

    var PRTAdd = $('#PRTAdd').is(":checked") ? 1 : 0;
    var PRTModify = $('#PRTModify').is(":checked") ? 1 : 0;
    var PRTDelete = $('#PRTDelete').is(":checked") ? 1 : 0;
    var PRTView = $('#PRTView').is(":checked") ? 1 : 0;
    var PRTDownload = 0;
    var PRTMenuID = 10;
    var PRTValue = ' (' + RoleID + ',' + PRTMenuID + ',' + PRTMenuID + ',' + PRTAdd + ',' + PRTModify + ',' + PRTDelete + ',' + PRTView + ',' + PRTDownload + ',' + PRTMenuID + '),';

    var TORAdd = $('#TORAdd').is(":checked") ? 1 : 0;
    var TORModify = $('#TORModify').is(":checked") ? 1 : 0;
    var TORDelete = $('#TORDelete').is(":checked") ? 1 : 0;
    var TORView = $('#TORView').is(":checked") ? 1 : 0;
    var TORDownload = 0;
    var TORMenuID = 11;
    var TORValue = ' (' + RoleID + ',' + TORMenuID + ',' + TORMenuID + ',' + TORAdd + ',' + TORModify + ',' + TORDelete + ',' + TORView + ',' + TORDownload + ',' + TORMenuID + '),';

    var INJTAdd = $('#INJTAdd').is(":checked") ? 1 : 0;
    var INJTModify = $('#INJTModify').is(":checked") ? 1 : 0;
    var INJTDelete = $('#INJTDelete').is(":checked") ? 1 : 0;
    var INJTView = $('#INJTView').is(":checked") ? 1 : 0;
    var INJTDownload = 0;
    var INJTMenuID = 12;
    var INJTValue = ' (' + RoleID + ',' + INJTMenuID + ',' + INJTMenuID + ',' + INJTAdd + ',' + INJTModify + ',' + INJTDelete + ',' + INJTView + ',' + INJTDownload + ',' + INJTMenuID + '),';

    var TOVAdd = $('#TOVAdd').is(":checked") ? 1 : 0;
    var TOVModify = $('#TOVModify').is(":checked") ? 1 : 0;
    var TOVDelete = $('#TOVDelete').is(":checked") ? 1 : 0;
    var TOVView = $('#TOVView').is(":checked") ? 1 : 0;
    var TOVDownload = 0;
    var TOVMenuID = 13;
    var TOVValue = ' (' + RoleID + ',' + TOVMenuID + ',' + TOVMenuID + ',' + TOVAdd + ',' + TOVModify + ',' + TOVDelete + ',' + TOVView + ',' + TOVDownload + ',' + TOVMenuID + '),';

    var REPAdd = $('#REPAdd').is(":checked") ? 1 : 0;
    var REPModify = $('#REPModify').is(":checked") ? 1 : 0;
    var REPDelete = $('#REPDelete').is(":checked") ? 1 : 0;
    var REPView = $('#REPView').is(":checked") ? 1 : 0;
    var REPDownload = 0;
    var REPMenuID = 14;
    var REPValue = ' (' + RoleID + ',' + REPMenuID + ',' + REPMenuID + ',' + REPAdd + ',' + REPModify + ',' + REPDelete + ',' + REPView + ',' + REPDownload + ',' + REPMenuID + '),';

    var PROPAdd = $('#PROPAdd').is(":checked") ? 1 : 0;
    var PROPModify = $('#PROPModify').is(":checked") ? 1 : 0;
    var PROPDelete = $('#PROPDelete').is(":checked") ? 1 : 0;
    var PROPView = $('#PROPView').is(":checked") ? 1 : 0;
    var PROPDownload = 0;
    var PROPMenuID = 15;
    var PROPValue = ' (' + RoleID + ',' + PROPMenuID + ',' + PROPMenuID + ',' + PROPAdd + ',' + PROPModify + ',' + PROPDelete + ',' + PROPView + ',' + PROPDownload + ',' + PROPMenuID + '),';

    var CLSTAdd = $('#CLSTAdd').is(":checked") ? 1 : 0;
    var CLSTModify = $('#CLSTModify').is(":checked") ? 1 : 0;
    var CLSTDelete = $('#CLSTDelete').is(":checked") ? 1 : 0;
    var CLSTView = $('#CLSTView').is(":checked") ? 1 : 0;
    var CLSTDownload = 0;
    var CLSTMenuID = 16;
    var CLSTValue = ' (' + RoleID + ',' + CLSTMenuID + ',' + CLSTMenuID + ',' + CLSTAdd + ',' + CLSTModify + ',' + CLSTDelete + ',' + CLSTView + ',' + CLSTDownload + ',' + CLSTMenuID + '),';

    var TSKSAdd = $('#TSKSAdd').is(":checked") ? 1 : 0;
    var TSKSModify = $('#TSKSModify').is(":checked") ? 1 : 0;
    var TSKSDelete = $('#TSKSDelete').is(":checked") ? 1 : 0;
    var TSKSView = $('#TSKSView').is(":checked") ? 1 : 0;
    var TSKSDownload = 0;
    var TSKSMenuID = 17;
    var TSKSValue = ' (' + RoleID + ',' + TSKSMenuID + ',' + TSKSMenuID + ',' + TSKSAdd + ',' + TSKSModify + ',' + TSKSDelete + ',' + TSKSView + ',' + TSKSDownload + ',' + TSKSMenuID + '),';

    var INSTAdd = $('#INSTAdd').is(":checked") ? 1 : 0;
    var INSTModify = $('#INSTModify').is(":checked") ? 1 : 0;
    var INSTDelete = $('#INSTDelete').is(":checked") ? 1 : 0;
    var INSTView = $('#INSTView').is(":checked") ? 1 : 0;
    var INSTDownload = 0;
    var INSTMenuID = 18;
    var INSTValue = ' (' + RoleID + ',' + INSTMenuID + ',' + INSTMenuID + ',' + INSTAdd + ',' + INSTModify + ',' + INSTDelete + ',' + INSTView + ',' + INSTDownload + ',' + INSTMenuID + '),';

    var CPTAdd = $('#CPTAdd').is(":checked") ? 1 : 0;
    var CPTModify = $('#CPTModify').is(":checked") ? 1 : 0;
    var CPTDelete = $('#CPTDelete').is(":checked") ? 1 : 0;
    var CPTView = $('#CPTView').is(":checked") ? 1 : 0;
    var CPTDownload = 0;
    var CPTMenuID = 19;
    var CPTValue = ' (' + RoleID + ',' + CPTMenuID + ',' + CPTMenuID + ',' + CPTAdd + ',' + CPTModify + ',' + CPTDelete + ',' + CPTView + ',' + CPTDownload + ',' + CPTMenuID + '),';

    var ICDAdd = $('#ICDAdd').is(":checked") ? 1 : 0;
    var ICDModify = $('#ICDModify').is(":checked") ? 1 : 0;
    var ICDDelete = $('#ICDDelete').is(":checked") ? 1 : 0;
    var ICDView = $('#ICDView').is(":checked") ? 1 : 0;
    var ICDDownload = 0;
    var ICDMenuID = 20;
    var ICDValue = ' (' + RoleID + ',' + ICDMenuID + ',' + ICDMenuID + ',' + ICDAdd + ',' + ICDModify + ',' + ICDDelete + ',' + ICDView + ',' + ICDDownload + ',' + ICDMenuID + '),';

    var CaseAdd = $('#CaseAdd').is(":checked") ? 1 : 0;
    var CaseModify = $('#CaseModify').is(":checked") ? 1 : 0;
    var CaseDelete = $('#CaseDelete').is(":checked") ? 1 : 0;
    var CaseView = $('#CaseView').is(":checked") ? 1 : 0;
    var CaseDownload = $('#CaseDow').is(":checked") ? 1 : 0;
    var CaseMenuID = 21;
    var CaseValue = ' (' + RoleID + ',' + CaseMenuID + ',' + CaseMenuID + ',' + CaseAdd + ',' + CaseModify + ',' + CaseDelete + ',' + CaseView + ',' + CaseDownload + ',' + CaseMenuID + '),';

    var CASTAdd = $('#CASTAdd').is(":checked") ? 1 : 0;
    var CASTModify = $('#CASTModify').is(":checked") ? 1 : 0;
    var CASTDelete = $('#CASTDelete').is(":checked") ? 1 : 0;
    var CASTView = $('#CASTView').is(":checked") ? 1 : 0;
    var CASTDownload = $('#CASTDow').is(":checked") ? 1 : 0;
    var CASTMenuID = 22;
    var CASTValue = ' (' + RoleID + ',' + CASTMenuID + ',' + CASTMenuID + ',' + CASTAdd + ',' + CASTModify + ',' + CASTDelete + ',' + CASTView + ',' + CASTDownload + ',' + CASTMenuID + '),';

    var PLPAAdd = $('#PLPAAdd').is(":checked") ? 1 : 0;
    var PLPAModify = $('#PLPAModify').is(":checked") ? 1 : 0;
    var PLPADelete = $('#PLPADelete').is(":checked") ? 1 : 0;
    var PLPAView = $('#PLPAView').is(":checked") ? 1 : 0;
    var PLPADownload = $('#PLPADow').is(":checked") ? 1 : 0;
    var PLPAMenuID = 23;
    var PLPAValue = ' (' + RoleID + ',' + PLPAMenuID + ',' + PLPAMenuID + ',' + PLPAAdd + ',' + PLPAModify + ',' + PLPADelete + ',' + PLPAView + ',' + PLPADownload + ',' + PLPAMenuID + '),';

    var PreliAdd = $('#PreliAdd').is(":checked") ? 1 : 0;
    var PreliModify = $('#PreliModify').is(":checked") ? 1 : 0;
    var PreliDelete = $('#PreliDelete').is(":checked") ? 1 : 0;
    var PreliView = $('#PreliView').is(":checked") ? 1 : 0;
    var PreliDownload = $('#PreliDow').is(":checked") ? 1 : 0;
    var PreliMenuID = 24;
    var PreliValue = ' (' + RoleID + ',' + PreliMenuID + ',' + PreliMenuID + ',' + PreliAdd + ',' + PreliModify + ',' + PreliDelete + ',' + PreliView + ',' + PreliDownload + ',' + PreliMenuID + '),';

    var DEFAdd = $('#DEFAdd').is(":checked") ? 1 : 0;
    var DEFModify = $('#DEFModify').is(":checked") ? 1 : 0;
    var DEFDelete = $('#DEFDelete').is(":checked") ? 1 : 0;
    var DEFView = $('#DEFView').is(":checked") ? 1 : 0;
    var DEFDownload = $('#DEFDow').is(":checked") ? 1 : 0;
    var DEFMenuID = 25;
    var DEFValue = ' (' + RoleID + ',' + DEFMenuID + ',' + DEFMenuID + ',' + DEFAdd + ',' + DEFModify + ',' + DEFDelete + ',' + DEFView + ',' + DEFDownload + ',' + DEFMenuID + '),';

    var INSUAdd = $('#INSUAdd').is(":checked") ? 1 : 0;
    var INSUModify = $('#INSUModify').is(":checked") ? 1 : 0;
    var INSUDelete = $('#INSUDelete').is(":checked") ? 1 : 0;
    var INSUView = $('#INSUView').is(":checked") ? 1 : 0;
    var INSUDownload = $('#INSUDow').is(":checked") ? 1 : 0;
    var INSUMenuID = 26;
    var INSUValue = ' (' + RoleID + ',' + INSUMenuID + ',' + INSUMenuID + ',' + INSUAdd + ',' + INSUModify + ',' + INSUDelete + ',' + INSUView + ',' + INSUDownload + ',' + INSUMenuID + '),';

    var INCTAdd = $('#INCTAdd').is(":checked") ? 1 : 0;
    var INCTModify = $('#INCTModify').is(":checked") ? 1 : 0;
    var INCTDelete = $('#INCTDelete').is(":checked") ? 1 : 0;
    var INCTView = $('#INCTView').is(":checked") ? 1 : 0;
    var INCTDownload = $('#INCTDow').is(":checked") ? 1 : 0;
    var INCTMenuID = 27;
    var INCTValue = ' (' + RoleID + ',' + INCTMenuID + ',' + INCTMenuID + ',' + INCTAdd + ',' + INCTModify + ',' + INCTDelete + ',' + INCTView + ',' + INCTDownload + ',' + INCTMenuID + '),';

    var EVIDAdd = $('#EVIDAdd').is(":checked") ? 1 : 0;
    var EVIDModify = $('#EVIDModify').is(":checked") ? 1 : 0;
    var EVIDDelete = $('#EVIDDelete').is(":checked") ? 1 : 0;
    var EVIDView = $('#EVIDView').is(":checked") ? 1 : 0;
    var EVIDDownload = $('#EVIDDow').is(":checked") ? 1 : 0;
    var EVIDMenuID = 28;
    var EVIDValue = ' (' + RoleID + ',' + EVIDMenuID + ',' + EVIDMenuID + ',' + EVIDAdd + ',' + EVIDModify + ',' + EVIDDelete + ',' + EVIDView + ',' + EVIDDownload + ',' + EVIDMenuID + '),';

    var TRTIAdd = $('#TRTIAdd').is(":checked") ? 1 : 0;
    var TRTIModify = $('#TRTIModify').is(":checked") ? 1 : 0;
    var TRTIDelete = $('#TRTIDelete').is(":checked") ? 1 : 0;
    var TRTIView = $('#TRTIView').is(":checked") ? 1 : 0;
    var TRTIDownload = $('#TRTIDow').is(":checked") ? 1 : 0;
    var TRTIMenuID = 29;
    var TRTIValue = ' (' + RoleID + ',' + TRTIMenuID + ',' + TRTIMenuID + ',' + TRTIAdd + ',' + TRTIModify + ',' + TRTIDelete + ',' + TRTIView + ',' + TRTIDownload + ',' + TRTIMenuID + '),';

    var COFAdd = $('#COFAdd').is(":checked") ? 1 : 0;
    var COFModify = $('#COFModify').is(":checked") ? 1 : 0;
    var COFDelete = $('#COFDelete').is(":checked") ? 1 : 0;
    var COFView = $('#COFView').is(":checked") ? 1 : 0;
    var COFDownload = $('#COFDow').is(":checked") ? 1 : 0;
    var COFMenuID = 30;
    var COFValue = ' (' + RoleID + ',' + COFMenuID + ',' + COFMenuID + ',' + COFAdd + ',' + COFModify + ',' + COFDelete + ',' + COFView + ',' + COFDownload + ',' + COFMenuID + '),';

    var ADFAdd = $('#ADFAdd').is(":checked") ? 1 : 0;
    var ADFModify = $('#ADFModify').is(":checked") ? 1 : 0;
    var ADFDelete = $('#ADFDelete').is(":checked") ? 1 : 0;
    var ADFView = $('#ADFView').is(":checked") ? 1 : 0;
    var ADFDownload = $('#ADFDow').is(":checked") ? 1 : 0;
    var ADFMenuID = 31;
    var ADFValue = ' (' + RoleID + ',' + ADFMenuID + ',' + ADFMenuID + ',' + ADFAdd + ',' + ADFModify + ',' + ADFDelete + ',' + ADFView + ',' + ADFDownload + ',' + ADFMenuID + '),';

    var TRDAdd = $('#TRDAdd').is(":checked") ? 1 : 0;
    var TRDModify = $('#TRDModify').is(":checked") ? 1 : 0;
    var TRDDelete = $('#TRDDelete').is(":checked") ? 1 : 0;
    var TRDView = $('#TRDView').is(":checked") ? 1 : 0;
    var TRDDownload = $('#TRDDow').is(":checked") ? 1 : 0;
    var TRDMenuID = 32;
    var TRDValue = ' (' + RoleID + ',' + TRDMenuID + ',' + TRDMenuID + ',' + TRDAdd + ',' + TRDModify + ',' + TRDDelete + ',' + TRDView + ',' + TRDDownload + ',' + TRDMenuID + '),';

    var DISGAdd = $('#DISGAdd').is(":checked") ? 1 : 0;
    var DISGModify = $('#DISGModify').is(":checked") ? 1 : 0;
    var DISGDelete = $('#DISGDelete').is(":checked") ? 1 : 0;
    var DISGView = $('#DISGView').is(":checked") ? 1 : 0;
    var DISGDownload = $('#DISGDow').is(":checked") ? 1 : 0;
    var DISGMenuID = 33;
    var DISGValue = ' (' + RoleID + ',' + DISGMenuID + ',' + DISGMenuID + ',' + DISGAdd + ',' + DISGModify + ',' + DISGDelete + ',' + DISGView + ',' + DISGDownload + ',' + DISGMenuID + '),';

    var MMIAdd = $('#MMIAdd').is(":checked") ? 1 : 0;
    var MMIModify = $('#MMIModify').is(":checked") ? 1 : 0;
    var MMIDelete = $('#MMIDelete').is(":checked") ? 1 : 0;
    var MMIView = $('#MMIView').is(":checked") ? 1 : 0;
    var MMIDownload = $('#MMIDow').is(":checked") ? 1 : 0;
    var MMIMenuID = 34;
    var MMIValue = ' (' + RoleID + ',' + MMIMenuID + ',' + MMIMenuID + ',' + MMIAdd + ',' + MMIModify + ',' + MMIDelete + ',' + MMIView + ',' + MMIDownload + ',' + MMIMenuID + '),';

    var DOAPAdd = $('#DOAPAdd').is(":checked") ? 1 : 0;
    var DOAPModify = $('#DOAPModify').is(":checked") ? 1 : 0;
    var DOAPDelete = $('#DOAPDelete').is(":checked") ? 1 : 0;
    var DOAPView = $('#DOAPView').is(":checked") ? 1 : 0;
    var DOAPDownload = $('#DOAPDow').is(":checked") ? 1 : 0;
    var DOAPMenuID = 35;
    var DOAPValue = ' (' + RoleID + ',' + DOAPMenuID + ',' + DOAPMenuID + ',' + DOAPAdd + ',' + DOAPModify + ',' + DOAPDelete + ',' + DOAPView + ',' + DOAPDownload + ',' + DOAPMenuID + '),';

    var DTSKAdd = $('#DTSKAdd').is(":checked") ? 1 : 0;
    var DTSKModify = $('#DTSKModify').is(":checked") ? 1 : 0;
    var DTSKDelete = $('#DTSKDelete').is(":checked") ? 1 : 0;
    var DTSKView = $('#DTSKView').is(":checked") ? 1 : 0;
    var DTSKDownload = $('#DTSKDow').is(":checked") ? 1 : 0;
    var DTSKMenuID = 36;
    var DTSKValue = ' (' + RoleID + ',' + DTSKMenuID + ',' + DTSKMenuID + ',' + DTSKAdd + ',' + DTSKModify + ',' + DTSKDelete + ',' + DTSKView + ',' + DTSKDownload + ',' + DTSKMenuID + '),';

    var MDCTAdd = $('#MDCTAdd').is(":checked") ? 1 : 0;
    var MDCTModify = $('#MDCTModify').is(":checked") ? 1 : 0;
    var MDCTDelete = $('#MDCTDelete').is(":checked") ? 1 : 0;
    var MDCTView = $('#MDCTView').is(":checked") ? 1 : 0;
    var MDCTDownload = $('#MDCTDow').is(":checked") ? 1 : 0;
    var MDCTMenuID = 37;
    var MDCTValue = ' (' + RoleID + ',' + MDCTMenuID + ',' + MDCTMenuID + ',' + MDCTAdd + ',' + MDCTModify + ',' + MDCTDelete + ',' + MDCTView + ',' + MDCTDownload + ',' + MDCTMenuID + '),';

    var CODGAdd = $('#CODGAdd').is(":checked") ? 1 : 0;
    var CODGModify = $('#CODGModify').is(":checked") ? 1 : 0;
    var CODGDelete = $('#CODGDelete').is(":checked") ? 1 : 0;
    var CODGView = $('#CODGView').is(":checked") ? 1 : 0;
    var CODGDownload = $('#CODGDow').is(":checked") ? 1 : 0;
    var CODGMenuID = 38;
    var CODGValue = ' (' + RoleID + ',' + CODGMenuID + ',' + CODGMenuID + ',' + CODGAdd + ',' + CODGModify + ',' + CODGDelete + ',' + CODGView + ',' + CODGDownload + ',' + CODGMenuID + '),';

    var LTEGAdd = $('#LTEGAdd').is(":checked") ? 1 : 0;
    var LTEGModify = $('#LTEGModify').is(":checked") ? 1 : 0;
    var LTEGDelete = $('#LTEGDelete').is(":checked") ? 1 : 0;
    var LTEGView = $('#LTEGView').is(":checked") ? 1 : 0;
    var LTEGDownload = $('#LTEGDow').is(":checked") ? 1 : 0;
    var LTEGMenuID = 39;
    var LTEGValue = ' (' + RoleID + ',' + LTEGMenuID + ',' + LTEGMenuID + ',' + LTEGAdd + ',' + LTEGModify + ',' + LTEGDelete + ',' + LTEGView + ',' + LTEGDownload + ',' + LTEGMenuID + '),';

    var CLIMAdd = $('#CLIMAdd').is(":checked") ? 1 : 0;
    var CLIMModify = $('#CLIMModify').is(":checked") ? 1 : 0;
    var CLIMDelete = $('#CLIMDelete').is(":checked") ? 1 : 0;
    var CLIMView = $('#CLIMView').is(":checked") ? 1 : 0;
    var CLIMDownload = $('#CLIMDow').is(":checked") ? 1 : 0;
    var CLIMMenuID = 40;
    var CLIMValue = ' (' + RoleID + ',' + CLIMMenuID + ',' + CLIMMenuID + ',' + CLIMAdd + ',' + CLIMModify + ',' + CLIMDelete + ',' + CLIMView + ',' + CLIMDownload + ',' + CLIMMenuID + '),';

    var ATAPAdd = $('#ATAPAdd').is(":checked") ? 1 : 0;
    var ATAPModify = $('#ATAPModify').is(":checked") ? 1 : 0;
    var ATAPDelete = $('#ATAPDelete').is(":checked") ? 1 : 0;
    var ATAPView = $('#ATAPView').is(":checked") ? 1 : 0;
    var ATAPDownload = $('#ATAPDow').is(":checked") ? 1 : 0;
    var ATAPMenuID = 41;
    var ATAPValue = ' (' + RoleID + ',' + ATAPMenuID + ',' + ATAPMenuID + ',' + ATAPAdd + ',' + ATAPModify + ',' + ATAPDelete + ',' + ATAPView + ',' + ATAPDownload + ',' + ATAPMenuID + '),';

    var ATTKAdd = $('#ATTKAdd').is(":checked") ? 1 : 0;
    var ATTKModify = $('#ATTKModify').is(":checked") ? 1 : 0;
    var ATTKDelete = $('#ATTKDelete').is(":checked") ? 1 : 0;
    var ATTKView = $('#ATTKView').is(":checked") ? 1 : 0;
    var ATTKDownload = $('#ATTKDow').is(":checked") ? 1 : 0;
    var ATTKMenuID = 42;
    var ATTKValue = ' (' + RoleID + ',' + ATTKMenuID + ',' + ATTKMenuID + ',' + ATTKAdd + ',' + ATTKModify + ',' + ATTKDelete + ',' + ATTKView + ',' + ATTKDownload + ',' + ATTKMenuID + '),';

    var CACOAdd = $('#CACOAdd').is(":checked") ? 1 : 0;
    var CACOModify = $('#CACOModify').is(":checked") ? 1 : 0;
    var CACODelete = $('#CACODelete').is(":checked") ? 1 : 0;
    var CACOView = $('#CACOView').is(":checked") ? 1 : 0;
    var CACODownload = $('#CACODow').is(":checked") ? 1 : 0;
    var CACOMenuID = 43;
    var CACOValue = ' (' + RoleID + ',' + CACOMenuID + ',' + CACOMenuID + ',' + CACOAdd + ',' + CACOModify + ',' + CACODelete + ',' + CACOView + ',' + CACODownload + ',' + CACOMenuID + '),';

    var PAEGAdd = $('#PAEGAdd').is(":checked") ? 1 : 0;
    var PAEGModify = $('#PAEGModify').is(":checked") ? 1 : 0;
    var PAEGDelete = $('#PAEGDelete').is(":checked") ? 1 : 0;
    var PAEGView = $('#PAEGView').is(":checked") ? 1 : 0;
    var PAEGDownload = $('#PAEGDow').is(":checked") ? 1 : 0;
    var PAEGMenuID = 44;
    var PAEGValue = ' (' + RoleID + ',' + PAEGMenuID + ',' + PAEGMenuID + ',' + PAEGAdd + ',' + PAEGModify + ',' + PAEGDelete + ',' + PAEGView + ',' + PAEGDownload + ',' + PAEGMenuID + '),';

    var ATEGAdd = $('#ATEGAdd').is(":checked") ? 1 : 0;
    var ATEGModify = $('#ATEGModify').is(":checked") ? 1 : 0;
    var ATEGDelete = $('#ATEGDelete').is(":checked") ? 1 : 0;
    var ATEGView = $('#ATEGView').is(":checked") ? 1 : 0;
    var ATEGDownload = $('#ATEGDow').is(":checked") ? 1 : 0;
    var ATEGMenuID = 45;
    var ATEGValue = ' (' + RoleID + ',' + ATEGMenuID + ',' + ATEGMenuID + ',' + ATEGAdd + ',' + ATEGModify + ',' + ATEGDelete + ',' + ATEGView + ',' + ATEGDownload + ',' + ATEGMenuID + '),';

    var DPRAdd = $('#DPRAdd').is(":checked") ? 1 : 0;
    var DPRModify = $('#DPRModify').is(":checked") ? 1 : 0;
    var DPRDelete = $('#DPRDelete').is(":checked") ? 1 : 0;
    var DPRView = $('#DPRView').is(":checked") ? 1 : 0;
    var DPRDownload = $('#DPRDow').is(":checked") ? 1 : 0;
    var DPRMenuID = 46;
    var DPRValue = ' (' + RoleID + ',' + DPRMenuID + ',' + DPRMenuID + ',' + DPRAdd + ',' + DPRModify + ',' + DPRDelete + ',' + DPRView + ',' + DPRDownload + ',' + DPRMenuID + '),';

    var CAREAdd = $('#CAREAdd').is(":checked") ? 1 : 0;
    var CAREModify = $('#CAREModify').is(":checked") ? 1 : 0;
    var CAREDelete = $('#CAREDelete').is(":checked") ? 1 : 0;
    var CAREView = $('#CAREView').is(":checked") ? 1 : 0;
    var CAREDownload = $('#CAREDow').is(":checked") ? 1 : 0;
    var CAREMenuID = 47;
    var CAREValue = ' (' + RoleID + ',' + CAREMenuID + ',' + CAREMenuID + ',' + CAREAdd + ',' + CAREModify + ',' + CAREDelete + ',' + CAREView + ',' + CAREDownload + ',' + CAREMenuID + '),';

    var INJRAdd = $('#INJRAdd').is(":checked") ? 1 : 0;
    var INJRModify = $('#INJRModify').is(":checked") ? 1 : 0;
    var INJRDelete = $('#INJRDelete').is(":checked") ? 1 : 0;
    var INJRView = $('#INJRView').is(":checked") ? 1 : 0;
    var INJRDownload = $('#INJRDow').is(":checked") ? 1 : 0;
    var INJRMenuID = 48;
    var INJRValue = ' (' + RoleID + ',' + INJRMenuID + ',' + INJRMenuID + ',' + INJRAdd + ',' + INJRModify + ',' + INJRDelete + ',' + INJRView + ',' + INJRDownload + ',' + INJRMenuID + '),';

     var TTaskAdd = $('#TTaskAdd').is(":checked") ? 1 : 0;
     var TTaskModify = $('#TTaskModify').is(":checked") ? 1 : 0;
     var TTaskDelete = $('#TTaskDelete').is(":checked") ? 1 : 0;
     var TTaskView = $('#TTaskView').is(":checked") ? 1 : 0;
     var TTDownload = 0;
     var TTMenuID = 49;
     var TTValue = ' (' + RoleID + ',' + TTMenuID + ',' + TTMenuID + ',' + TTaskAdd + ',' + TTaskModify + ',' + TTaskDelete + ',' + TTaskView + ',' + TTDownload + ',' + TTMenuID + '),';

    

     var PARAAdd = $('#PARAAdd').is(":checked") ? 1 : 0;
     var PARAModify = $('#PARAModify').is(":checked") ? 1 : 0;
     var PARADelete = $('#PARADelete').is(":checked") ? 1 : 0;
     var PARAView = $('#PARAView').is(":checked") ? 1 : 0;
     var PARADownload = 0;
     var PARAMenuID = 50;
     var PARAValue = ' (' + RoleID + ',' + PARAMenuID + ',' + PARAMenuID + ',' + PARAAdd + ',' + PARAModify + ',' + PARADelete + ',' + PARAView + ',' + PARADownload + ',' + PARAMenuID + '),';

   

     var LIENAdd = $('#LIENAdd').is(":checked") ? 1 : 0;
     var LIENModify = $('#LIENModify').is(":checked") ? 1 : 0;
     var LIENDelete = $('#LIENDelete').is(":checked") ? 1 : 0;
     var LIENView = $('#LIENView').is(":checked") ? 1 : 0;
     var LIENDow = $('#LIENDow').is(":checked") ? 1 : 0;
     var LIENMenuID = 51;
     var LIENValue = ' (' + RoleID + ',' + LIENMenuID + ',' + LIENMenuID + ',' + LIENAdd + ',' + LIENModify + ',' + LIENDelete + ',' + LIENView + ',' + LIENDow + ',' + LIENMenuID + ')';

     var Qstring = 'Insert into rolevscapability (RoleID,MenuID,CapabilityID,Adds,Modifys,Deletes,Views,Downloads,OrderID) values ' + MUValue + URValue + RVCValue + UARValue + NatValue + STATValue + CITYValue + CSTValue + HOSValue + PRTValue + TORValue + INJTValue + TOVValue + REPValue + PROPValue + CLSTValue + TSKSValue + INSTValue + CPTValue + ICDValue + CaseValue + CASTValue + PLPAValue + PreliValue + DEFValue + INSUValue + INCTValue + EVIDValue + TRTIValue + COFValue + ADFValue + TRDValue + DISGValue + MMIValue + DOAPValue + DTSKValue + MDCTValue + CODGValue + LTEGValue + CLIMValue + ATAPValue + ATTKValue + CACOValue + PAEGValue + ATEGValue + DPRValue + CAREValue + INJRValue + TTValue + PARAValue + LIENValue + ';';
    return Qstring;
}

function RoleVsCapSubmit() {

    var RoleID = $('#ddlrole').val();
    if (RoleID == 0) {
        not2("Please select the user role.");
        $('#ddlrole').focus();
        $('body,html').animate({ scrollTop: 0 }, 0);
        return false;
    }

    var QStrings = QstringBind();
    var url = '../RoleVsCapability/RoleVsCapSubmit';
    var data1 = { "Qstring": QStrings, "RoleIDs": RoleID };
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            if (data == "SEXP") {
                window.location.href = '../Homepage/Index';
            }
            not1("Your data was updated successfully.");
            $('body,html').animate({ scrollTop: 0 }, 0);
        }
    });
}


function OnchangeRole(ids,UseID,flagbind) {
    $("#ddlshowrole").css({ 'display': 'block' });
    var RoleID = $('#ddlrole').val();
    if (RoleID == 0) {
        $("#ddlshowrole").css({ 'display': 'none' });
        return false;
    }
    if (flagbind == 1) {
        PractisTypeBind();
    }
    //var RoleID = 1;
    if (ids == "1") {
        var url = '../RoleVsCapability/RoleVsCapBind';
        var data1 = { "RoleIDs": RoleID };
    }
    else if (ids == "2") {
        var url = '../User/UserVsCapBind';
        var data1 = { "UsrIDs": UseID };
    }
    //alert()
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'json',
        'url': url,
        'data': data1,
        'success': function (data) {
            if (data == "SEXP") {
                window.location.href = '../Homepage/Index';
            }
            for (var i = 0; i < data.length; i++) {
               // debugger;
                //alert(data.length);
                var position = data[i].MenuID;
                // alert(position);
                switch (position) {
                    case 1:
                        if (data[i].Adds == "1")
                            $('#MUAdd').prop('checked', true);
                        else
                            $('#MUAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#MUModify').prop('checked', true);
                        else
                            $('#MUModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#MUDelete').prop('checked', true);
                        else
                            $('#MUDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#MUView').prop('checked', true);
                        else
                            $('#MUView').prop('checked', false);
                        break;

                    case 2:
                        if (data[i].Adds == "1")
                            $('#URAdd').prop('checked', true);
                        else
                            $('#URAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#URModify').prop('checked', true);
                        else
                            $('#URModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#URDelete').prop('checked', true);
                        else
                            $('#URDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#URView').prop('checked', true);
                        else
                            $('#URView').prop('checked', false);
                        break;


                    case 3:
                        if (data[i].Adds == "1")
                            $('#RVCAdd').prop('checked', true);
                        else
                            $('#RVCAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#RVCModify').prop('checked', true);
                        else
                            $('#RVCModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#RVCDelete').prop('checked', true);
                        else
                            $('#RVCDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#RVCView').prop('checked', true);
                        else
                            $('#RVCView').prop('checked', false);
                        break;


                    case 4:
                        if (data[i].Adds == "1")
                            $('#UARAdd').prop('checked', true);
                        else
                            $('#UARAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#UARModify').prop('checked', true);
                        else
                            $('#UARModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#UARDelete').prop('checked', true);
                        else
                            $('#UARDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#UARView').prop('checked', true);
                        else
                            $('#UARView').prop('checked', false);
                        break;


                    case 5:
                        if (data[i].Adds == "1")
                            $('#NatAdd').prop('checked', true);
                        else
                            $('#NatAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#NatModify').prop('checked', true);
                        else
                            $('#NatModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#NatDelete').prop('checked', true);
                        else
                            $('#NatDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#NatView').prop('checked', true);
                        else
                            $('#NatView').prop('checked', false);
                        break;


                    case 6:
                        if (data[i].Adds == "1")
                            $('#STATAdd').prop('checked', true);
                        else
                            $('#STATAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#STATModify').prop('checked', true);
                        else
                            $('#STATModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#STATDelete').prop('checked', true);
                        else
                            $('#STATDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#STATView').prop('checked', true);
                        else
                            $('#STATView').prop('checked', false);
                        break;


                    case 7:
                        if (data[i].Adds == "1")
                            $('#CITYAdd').prop('checked', true);
                        else
                            $('#CITYAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CITYModify').prop('checked', true);
                        else
                            $('#CITYModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CITYDelete').prop('checked', true);
                        else
                            $('#CITYDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CITYView').prop('checked', true);
                        else
                            $('#CITYView').prop('checked', false);
                        break;


                    case 8:
                        if (data[i].Adds == "1")
                            $('#CSTAdd').prop('checked', true);
                        else
                            $('#CSTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CSTModify').prop('checked', true);
                        else
                            $('#CSTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CSTDelete').prop('checked', true);
                        else
                            $('#CSTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CSTView').prop('checked', true);
                        else
                            $('#CSTView').prop('checked', false);
                        break;


                    case 9:
                        if (data[i].Adds == "1")
                            $('#HOSAdd').prop('checked', true);
                        else
                            $('#HOSAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#HOSModify').prop('checked', true);
                        else
                            $('#HOSModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#HOSDelete').prop('checked', true);
                        else
                            $('#HOSDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#HOSView').prop('checked', true);
                        else
                            $('#HOSView').prop('checked', false);
                        break;


                    case 10:
                        if (data[i].Adds == "1")
                            $('#PRTAdd').prop('checked', true);
                        else
                            $('#PRTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PRTModify').prop('checked', true);
                        else
                            $('#PRTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PRTDelete').prop('checked', true);
                        else
                            $('#PRTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PRTView').prop('checked', true);
                        else
                            $('#PRTView').prop('checked', false);
                        break;


                    case 11:
                        if (data[i].Adds == "1")
                            $('#TORAdd').prop('checked', true);
                        else
                            $('#TORAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TORModify').prop('checked', true);
                        else
                            $('#TORModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TORDelete').prop('checked', true);
                        else
                            $('#TORDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TORView').prop('checked', true);
                        else
                            $('#TORView').prop('checked', false);
                        break;


                    case 12:
                        if (data[i].Adds == "1")
                            $('#INJTAdd').prop('checked', true);
                        else
                            $('#INJTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#INJTModify').prop('checked', true);
                        else
                            $('#INJTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#INJTDelete').prop('checked', true);
                        else
                            $('#INJTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#INJTView').prop('checked', true);
                        else
                            $('#INJTView').prop('checked', false);
                        break;


                    case 13:
                        if (data[i].Adds == "1")
                            $('#TOVAdd').prop('checked', true);
                        else
                            $('#TOVAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TOVModify').prop('checked', true);
                        else
                            $('#TOVModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TOVDelete').prop('checked', true);
                        else
                            $('#TOVDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TOVView').prop('checked', true);
                        else
                            $('#TOVView').prop('checked', false);
                        break;


                    case 14:
                        if (data[i].Adds == "1")
                            $('#REPAdd').prop('checked', true);
                        else
                            $('#REPAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#REPModify').prop('checked', true);
                        else
                            $('#REPModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#REPDelete').prop('checked', true);
                        else
                            $('#REPDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#REPView').prop('checked', true);
                        else
                            $('#REPView').prop('checked', false);
                        break;


                    case 15:
                        if (data[i].Adds == "1")
                            $('#PROPAdd').prop('checked', true);
                        else
                            $('#PROPAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PROPModify').prop('checked', true);
                        else
                            $('#PROPModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PROPDelete').prop('checked', true);
                        else
                            $('#PROPDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PROPView').prop('checked', true);
                        else
                            $('#PROPView').prop('checked', false);
                        break;


                    case 16:
                        if (data[i].Adds == "1")
                            $('#CLSTAdd').prop('checked', true);
                        else
                            $('#CLSTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CLSTModify').prop('checked', true);
                        else
                            $('#CLSTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CLSTDelete').prop('checked', true);
                        else
                            $('#CLSTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CLSTView').prop('checked', true);
                        else
                            $('#CLSTView').prop('checked', false);
                        break;


                    case 17:
                        if (data[i].Adds == "1")
                            $('#TSKSAdd').prop('checked', true);
                        else
                            $('#TSKSAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TSKSModify').prop('checked', true);
                        else
                            $('#TSKSModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TSKSDelete').prop('checked', true);
                        else
                            $('#TSKSDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TSKSView').prop('checked', true);
                        else
                            $('#TSKSView').prop('checked', false);
                        break;


                    case 18:
                        if (data[i].Adds == "1")
                            $('#INSTAdd').prop('checked', true);
                        else
                            $('#INSTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#INSTModify').prop('checked', true);
                        else
                            $('#INSTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#INSTDelete').prop('checked', true);
                        else
                            $('#INSTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#INSTView').prop('checked', true);
                        else
                            $('#INSTView').prop('checked', false);
                        break;


                    case 19:
                        if (data[i].Adds == "1")
                            $('#CPTAdd').prop('checked', true);
                        else
                            $('#CPTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CPTModify').prop('checked', true);
                        else
                            $('#CPTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CPTDelete').prop('checked', true);
                        else
                            $('#CPTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CPTView').prop('checked', true);
                        else
                            $('#CPTView').prop('checked', false);
                        break;


                    case 20:
                        if (data[i].Adds == "1")
                            $('#ICDAdd').prop('checked', true);
                        else
                            $('#ICDAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#ICDModify').prop('checked', true);
                        else
                            $('#ICDModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#ICDDelete').prop('checked', true);
                        else
                            $('#ICDDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#ICDView').prop('checked', true);
                        else
                            $('#ICDView').prop('checked', false);
                        break;


                    case 21:
                        if (data[i].Adds == "1")
                            $('#CaseAdd').prop('checked', true);
                        else
                            $('#CaseAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CaseModify').prop('checked', true);
                        else
                            $('#CaseModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CaseDelete').prop('checked', true);
                        else
                            $('#CaseDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CaseView').prop('checked', true);
                        else
                            $('#CaseView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CaseDow').prop('checked', true);
                        else
                            $('#CaseDow').prop('checked', false);
                        break;


                    case 22:
                        if (data[i].Adds == "1")
                            $('#CASTAdd').prop('checked', true);
                        else
                            $('#CASTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CASTModify').prop('checked', true);
                        else
                            $('#CASTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CASTDelete').prop('checked', true);
                        else
                            $('#CASTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CASTView').prop('checked', true);
                        else
                            $('#CASTView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CASTDow').prop('checked', true);
                        else
                            $('#CASTDow').prop('checked', false);
                        break;


                    case 23:
                        if (data[i].Adds == "1")
                            $('#PLPAAdd').prop('checked', true);
                        else
                            $('#PLPAAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PLPAModify').prop('checked', true);
                        else
                            $('#PLPAModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PLPADelete').prop('checked', true);
                        else
                            $('#PLPADelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PLPAView').prop('checked', true);
                        else
                            $('#PLPAView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#PLPADow').prop('checked', true);
                        else
                            $('#PLPADow').prop('checked', false);
                        break;


                    case 24:
                        if (data[i].Adds == "1")
                            $('#PreliAdd').prop('checked', true);
                        else
                            $('#PreliAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PreliModify').prop('checked', true);
                        else
                            $('#PreliModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PreliDelete').prop('checked', true);
                        else
                            $('#PreliDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PreliView').prop('checked', true);
                        else
                            $('#PreliView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#PreliDow').prop('checked', true);
                        else
                            $('#PreliDow').prop('checked', false);
                        break;


                    case 25:
                        if (data[i].Adds == "1")
                            $('#DEFAdd').prop('checked', true);
                        else
                            $('#DEFAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#DEFModify').prop('checked', true);
                        else
                            $('#DEFModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#DEFDelete').prop('checked', true);
                        else
                            $('#DEFDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#DEFView').prop('checked', true);
                        else
                            $('#DEFView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#DEFDow').prop('checked', true);
                        else
                            $('#DEFDow').prop('checked', false);
                        break;


                    case 26:
                        if (data[i].Adds == "1")
                            $('#INSUAdd').prop('checked', true);
                        else
                            $('#INSUAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#INSUModify').prop('checked', true);
                        else
                            $('#INSUModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#INSUDelete').prop('checked', true);
                        else
                            $('#INSUDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#INSUView').prop('checked', true);
                        else
                            $('#INSUView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#INSUDow').prop('checked', true);
                        else
                            $('#INSUDow').prop('checked', false);
                        break;


                    case 27:
                        if (data[i].Adds == "1")
                            $('#INCTAdd').prop('checked', true);
                        else
                            $('#INCTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#INCTModify').prop('checked', true);
                        else
                            $('#INCTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#INCTDelete').prop('checked', true);
                        else
                            $('#INCTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#INCTView').prop('checked', true);
                        else
                            $('#INCTView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#INCTDow').prop('checked', true);
                        else
                            $('#INCTDow').prop('checked', false);
                        break;


                    case 28:
                        if (data[i].Adds == "1")
                            $('#EVIDAdd').prop('checked', true);
                        else
                            $('#EVIDAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#EVIDModify').prop('checked', true);
                        else
                            $('#EVIDModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#EVIDDelete').prop('checked', true);
                        else
                            $('#EVIDDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#EVIDView').prop('checked', true);
                        else
                            $('#EVIDView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#EVIDDow').prop('checked', true);
                        else
                            $('#EVIDDow').prop('checked', false);
                        break;


                    case 29:
                        if (data[i].Adds == "1")
                            $('#TRTIAdd').prop('checked', true);
                        else
                            $('#TRTIAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TRTIModify').prop('checked', true);
                        else
                            $('#TRTIModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TRTIDelete').prop('checked', true);
                        else
                            $('#TRTIDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TRTIView').prop('checked', true);
                        else
                            $('#TRTIView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#TRTIDow').prop('checked', true);
                        else
                            $('#TRTIDow').prop('checked', false);
                        break;


                    case 30:
                        if (data[i].Adds == "1")
                            $('#COFAdd').prop('checked', true);
                        else
                            $('#COFAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#COFModify').prop('checked', true);
                        else
                            $('#COFModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#COFDelete').prop('checked', true);
                        else
                            $('#COFDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#COFView').prop('checked', true);
                        else
                            $('#COFView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#COFDow').prop('checked', true);
                        else
                            $('#COFDow').prop('checked', false);
                        break;


                    case 31:
                        if (data[i].Adds == "1")
                            $('#ADFAdd').prop('checked', true);
                        else
                            $('#ADFAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#ADFModify').prop('checked', true);
                        else
                            $('#ADFModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#ADFDelete').prop('checked', true);
                        else
                            $('#ADFDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#ADFView').prop('checked', true);
                        else
                            $('#ADFView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#ADFDow').prop('checked', true);
                        else
                            $('#ADFDow').prop('checked', false);
                        break;


                    case 32:
                        if (data[i].Adds == "1")
                            $('#TRDAdd').prop('checked', true);
                        else
                            $('#TRDAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TRDModify').prop('checked', true);
                        else
                            $('#TRDModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TRDDelete').prop('checked', true);
                        else
                            $('#TRDDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TRDView').prop('checked', true);
                        else
                            $('#TRDView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#TRDDow').prop('checked', true);
                        else
                            $('#TRDDow').prop('checked', false);
                        break;


                    case 33:
                        if (data[i].Adds == "1")
                            $('#DISGAdd').prop('checked', true);
                        else
                            $('#DISGAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#DISGModify').prop('checked', true);
                        else
                            $('#DISGModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#DISGDelete').prop('checked', true);
                        else
                            $('#DISGDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#DISGView').prop('checked', true);
                        else
                            $('#DISGView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#DISGDow').prop('checked', true);
                        else
                            $('#DISGDow').prop('checked', false);
                        break;


                    case 34:
                        if (data[i].Adds == "1")
                            $('#MMIAdd').prop('checked', true);
                        else
                            $('#MMIAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#MMIModify').prop('checked', true);
                        else
                            $('#MMIModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#MMIDelete').prop('checked', true);
                        else
                            $('#MMIDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#MMIView').prop('checked', true);
                        else
                            $('#MMIView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#MMIDow').prop('checked', true);
                        else
                            $('#MMIDow').prop('checked', false);
                        break;


                    case 35:
                        if (data[i].Adds == "1")
                            $('#DOAPAdd').prop('checked', true);
                        else
                            $('#DOAPAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#DOAPModify').prop('checked', true);
                        else
                            $('#DOAPModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#DOAPDelete').prop('checked', true);
                        else
                            $('#DOAPDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#DOAPView').prop('checked', true);
                        else
                            $('#DOAPView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#DOAPDow').prop('checked', true);
                        else
                            $('#DOAPDow').prop('checked', false);
                        break;


                    case 36:
                        if (data[i].Adds == "1")
                            $('#DTSKAdd').prop('checked', true);
                        else
                            $('#DTSKAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#DTSKModify').prop('checked', true);
                        else
                            $('#DTSKModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#DTSKDelete').prop('checked', true);
                        else
                            $('#DTSKDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#DTSKView').prop('checked', true);
                        else
                            $('#DTSKView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#DTSKDow').prop('checked', true);
                        else
                            $('#DTSKDow').prop('checked', false);
                        break;


                    case 37:
                        if (data[i].Adds == "1")
                            $('#MDCTAdd').prop('checked', true);
                        else
                            $('#MDCTAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#MDCTModify').prop('checked', true);
                        else
                            $('#MDCTModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#MDCTDelete').prop('checked', true);
                        else
                            $('#MDCTDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#MDCTView').prop('checked', true);
                        else
                            $('#MDCTView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#MDCTDow').prop('checked', true);
                        else
                            $('#MDCTDow').prop('checked', false);
                        break;


                    case 38:
                        if (data[i].Adds == "1")
                            $('#CODGAdd').prop('checked', true);
                        else
                            $('#CODGAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CODGModify').prop('checked', true);
                        else
                            $('#CODGModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CODGDelete').prop('checked', true);
                        else
                            $('#CODGDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CODGView').prop('checked', true);
                        else
                            $('#CODGView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CODGDow').prop('checked', true);
                        else
                            $('#CODGDow').prop('checked', false);
                        break;


                    case 39:
                        if (data[i].Adds == "1")
                            $('#LTEGAdd').prop('checked', true);
                        else
                            $('#LTEGAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#LTEGModify').prop('checked', true);
                        else
                            $('#LTEGModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#LTEGDelete').prop('checked', true);
                        else
                            $('#LTEGDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#LTEGView').prop('checked', true);
                        else
                            $('#LTEGView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#LTEGDow').prop('checked', true);
                        else
                            $('#LTEGDow').prop('checked', false);
                        break;


                    case 40:
                        if (data[i].Adds == "1")
                            $('#CLIMAdd').prop('checked', true);
                        else
                            $('#CLIMAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CLIMModify').prop('checked', true);
                        else
                            $('#CLIMModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CLIMDelete').prop('checked', true);
                        else
                            $('#CLIMDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CLIMView').prop('checked', true);
                        else
                            $('#CLIMView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CLIMDow').prop('checked', true);
                        else
                            $('#CLIMDow').prop('checked', false);
                        break;


                    case 41:
                        if (data[i].Adds == "1")
                            $('#ATAPAdd').prop('checked', true);
                        else
                            $('#ATAPAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#ATAPModify').prop('checked', true);
                        else
                            $('#ATAPModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#ATAPDelete').prop('checked', true);
                        else
                            $('#ATAPDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#ATAPView').prop('checked', true);
                        else
                            $('#ATAPView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#ATAPDow').prop('checked', true);
                        else
                            $('#ATAPDow').prop('checked', false);
                        break;


                    case 42:
                        if (data[i].Adds == "1")
                            $('#ATTKAdd').prop('checked', true);
                        else
                            $('#ATTKAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#ATTKModify').prop('checked', true);
                        else
                            $('#ATTKModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#ATTKDelete').prop('checked', true);
                        else
                            $('#ATTKDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#ATTKView').prop('checked', true);
                        else
                            $('#ATTKView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#ATTKDow').prop('checked', true);
                        else
                            $('#ATTKDow').prop('checked', false);
                        break;


                    case 43:
                        if (data[i].Adds == "1")
                            $('#CACOAdd').prop('checked', true);
                        else
                            $('#CACOAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CACOModify').prop('checked', true);
                        else
                            $('#CACOModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CACODelete').prop('checked', true);
                        else
                            $('#CACODelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CACOView').prop('checked', true);
                        else
                            $('#CACOView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CACODow').prop('checked', true);
                        else
                            $('#CACODow').prop('checked', false);
                        break;


                    case 44:
                        if (data[i].Adds == "1")
                            $('#PAEGAdd').prop('checked', true);
                        else
                            $('#PAEGAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PAEGModify').prop('checked', true);
                        else
                            $('#PAEGModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PAEGDelete').prop('checked', true);
                        else
                            $('#PAEGDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PAEGView').prop('checked', true);
                        else
                            $('#PAEGView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#PAEGDow').prop('checked', true);
                        else
                            $('#PAEGDow').prop('checked', false);
                        break;


                    case 45:
                        if (data[i].Adds == "1")
                            $('#ATEGAdd').prop('checked', true);
                        else
                            $('#ATEGAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#ATEGModify').prop('checked', true);
                        else
                            $('#ATEGModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#ATEGDelete').prop('checked', true);
                        else
                            $('#ATEGDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#ATEGView').prop('checked', true);
                        else
                            $('#ATEGView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#ATEGDow').prop('checked', true);
                        else
                            $('#ATEGDow').prop('checked', false);
                        break;


                    case 46:
                        if (data[i].Adds == "1")
                            $('#DPRAdd').prop('checked', true);
                        else
                            $('#DPRAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#DPRModify').prop('checked', true);
                        else
                            $('#DPRModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#DPRDelete').prop('checked', true);
                        else
                            $('#DPRDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#DPRView').prop('checked', true);
                        else
                            $('#DPRView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#DPRDow').prop('checked', true);
                        else
                            $('#DPRDow').prop('checked', false);
                        break;


                    case 47:
                        if (data[i].Adds == "1")
                            $('#CAREAdd').prop('checked', true);
                        else
                            $('#CAREAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#CAREModify').prop('checked', true);
                        else
                            $('#CAREModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#CAREDelete').prop('checked', true);
                        else
                            $('#CAREDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#CAREView').prop('checked', true);
                        else
                            $('#CAREView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#CAREDow').prop('checked', true);
                        else
                            $('#CAREDow').prop('checked', false);
                        break;


                    case 48:
                        if (data[i].Adds == "1")
                            $('#INJRAdd').prop('checked', true);
                        else
                            $('#INJRAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#INJRModify').prop('checked', true);
                        else
                            $('#INJRModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#INJRDelete').prop('checked', true);
                        else
                            $('#INJRDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#INJRView').prop('checked', true);
                        else
                            $('#INJRView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#INJRDow').prop('checked', true);
                        else
                            $('#INJRDow').prop('checked', false);
                        break;

                    case 49:
                        if (data[i].Adds == "1")
                            $('#TTaskAdd').prop('checked', true);
                        else
                            $('#TTaskAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#TTaskModify').prop('checked', true);
                        else
                            $('#TTaskModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#TTaskDelete').prop('checked', true);
                        else
                            $('#TTaskDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#TTaskView').prop('checked', true);
                        else
                            $('#TTaskView').prop('checked', false);
                        break;


                    case 50:
                        if (data[i].Adds == "1")
                            $('#PARAAdd').prop('checked', true);
                        else
                            $('#PARAAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#PARAModify').prop('checked', true);
                        else
                            $('#PARAModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#PARADelete').prop('checked', true);
                        else
                            $('#PARADelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#PARAView').prop('checked', true);
                        else
                            $('#PARAView').prop('checked', false);
                        break;

                    case 51:
                        if (data[i].Adds == "1")
                            $('#LIENAdd').prop('checked', true);
                        else
                            $('#LIENAdd').prop('checked', false);

                        if (data[i].Modifys == "1")
                            $('#LIENModify').prop('checked', true);
                        else
                            $('#LIENModify').prop('checked', false);

                        if (data[i].Deletes == "1")
                            $('#LIENDelete').prop('checked', true);
                        else
                            $('#LIENDelete').prop('checked', false);

                        if (data[i].Views == "1")
                            $('#LIENView').prop('checked', true);
                        else
                            $('#LIENView').prop('checked', false);

                        if (data[i].Downloads == "1")
                            $('#LIENDow').prop('checked', true);
                        else
                            $('#LIENDow').prop('checked', false);
                        break;


                }
            }
        }
    });
    AddRowClick();
    ModRowClick();
    DeletRowClick();
    ViewRowClick();
    DownRowClick();
}