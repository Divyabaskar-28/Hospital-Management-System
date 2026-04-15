$(document).ready(function () {
    $('.autocity, .autozipcode').autocomplete({
        source: function (request, response) {
            var param = { search: request.term }

            $.ajax({
                url: "AutoComplete",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {

                    var d = JSON.parse(data);

                    response($.map(d, function (item) {

                        return {
                            label: item.City,
                            val: item.City,
                            desc: item.City,
                            state: item.State,
                            cityid: item.CityId,
                            stateid: item.StateId
                        }

                    }));


                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        },
        focus: function (event, ui) {
            $(".ui-autocomplete > li").attr("title", ui.item.desc);
        },
        change: function (event, ui) {

            if (ui.item == null || ui.item == undefined) {

                $('.autocity').val('');
                $('.autostate').val('');
            }

        },
        select: function (event, ui) {

            if (ui.item) {
                $('.autocity').val(ui.item.label).attr('data-cityid', ui.item.cityid);
                $('.autostate').val(ui.item.state).attr('data-stateid', ui.item.stateid);
            }
        },
        minLength: 0
    }).focus(function () {
        $(this).autocomplete('search');
    }).focusout(selectFirstItem);

    $(this).autocomplete('search');

});

function selectFirstItem() {

    var autocomplete = $(this).data("ui-autocomplete");
    if (autocomplete.selectedItem) { return; }

    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i");

    autocomplete.widget().children(".ui-menu-item").each(function () {
        var item = $(this).data("ui-autocomplete-item");
        if (matcher.test(item.label || item.value || item)) {
            autocomplete.selectedItem = item;
            return false;
        }
    });

    if (autocomplete.selectedItem) {
        autocomplete._trigger("select", event, { item: autocomplete.selectedItem });
    }
}