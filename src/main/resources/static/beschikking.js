'use strict';

window.mijnsvb = window.mijnsvb || {};
mijnsvb.bezwaar = {
    beschikking: {}
}

mijnsvb.bezwaar.beschikking.laad = function () {
    mijnsvb.api.get('./api/bezwaar', function (data) {
            $('#persoonsgegevens').val(data.persoonsgegevens);
            $('#persoonsgegevens-spinner').addClass('visually-hidden');
            $('#persoonsgegevens').removeClass('visually-hidden');

            $('#burgerservicenummer').val(data.bsn);
            $('#burgerservicenummer-spinner').addClass('visually-hidden');
            $('#burgerservicenummer').removeClass('visually-hidden');

            if (data.beschikkingen.length === 0) {
                $('#toelichtingKeuze').addClass('visually-hidden');
                $('#keuzeAndereBeslissing').attr("required", false);
                $('#invoerAndereBeslissing').removeClass('visually-hidden');
                $('#datumAndereBeslissing').val(data.datumBeslissing);
                $('#omschrijving').val(data.omschrijving);
                $('#omschrijving').attr("required", true);

            } else {
                data.beschikkingen.forEach(function (beschikking, index) {
                    $('#labelBeslissing' + (index + 1)).text(data.beschikkingen[index].datumBeschikking + "  - " + data.beschikkingen[index].omschrijving);
                    $('#beslissing' + (index + 1)).removeClass('visually-hidden');
                })
                $('#andereBeslissing').removeClass('visually-hidden');
            }

            if (data.geselecteerdeBeslissing != null) {
                $('[name="keuzeBeslissing"][value="' + data.geselecteerdeBeslissing + '"]').attr("checked", true);
            }

            if (data.geselecteerdeBeslissing == "ander") {
                $('#invoerAndereBeslissing').removeClass('visually-hidden');
                $('#datumAndereBeslissing').val(data.datumBeslissing);
                $('#omschrijving').val(data.omschrijving);
            }

            mijnsvb.button.nav.aan();
        }
    );
}

mijnsvb.bezwaar.beschikking.submit = function (event) {
    event.preventDefault();
    event.stopPropagation();
    mijnsvb.button.nav.uit();

    $('#datumAndereBeslissing').removeClass('is-invalid');

    if ($('#datumAndereBeslissing').val() >= (new Date()).toISOString().substring(0, 10)) {
        $('#datumInVerleden').removeClass('visually-hidden')
        $('#datumAndereBeslissing').addClass('is-invalid');
        mijnsvb.button.nav.aan();
        return false;
    } else {
        $('#datumInVerleden').addClass('visually-hidden')
    }

    $(this).addClass('was-validated');

    $('#omschrijving')[0].setCustomValidity('');
    $("#bezwaar-form").addClass('was-validated');
    $("#errorOmschrijving1").addClass('visually-hidden');
    $("#errorOmschrijving2").addClass('visually-hidden');

    var inputTextArea = $('#omschrijving').val();
    var regex = new RegExp($('#omschrijving').attr('pattern'));
    if (!regex.test(inputTextArea)) {
        $('#omschrijving')[0].setCustomValidity('Does not match pattern');
        $("#errorOmschrijving1").removeClass('visually-hidden');
    }

    if ($('#omschrijving').val().trim() == '') {
        $('#omschrijving').val('');
        $("#errorOmschrijving2").removeClass('visually-hidden');
    }

    $(this).addClass('was-validated');
    if (!$(this)[0].checkValidity()) {
        mijnsvb.button.nav.aan();
        return;
    }

    mijnsvb.bezwaar.beschikking.verder();
}

mijnsvb.bezwaar.beschikking.verder = function () {
    mijnsvb.api.put('./api/bezwaar',
        {
            'nummerBeslissing': $('input[name="keuzeBeslissing"]:checked').val(),
            'datumBeslissing': $('#datumAndereBeslissing').val(),
            'omschrijving': $('#omschrijving').val()
        },
        function () {
            mijnsvb.button.nav.volgende();
        }
    );
}

$(document).ready(function () {
    $("#andereBeslissing").on("click", function () {
        $('#invoerAndereBeslissing').removeClass('visually-hidden');
        $('#omschrijving').attr("required", true);
    });
    $("[id^=beslissing]").on("click", function () {
        $('#invoerAndereBeslissing').addClass('visually-hidden');
        $('#omschrijving').attr("required", false);
    });

    $("#beschikking-form").on('submit', mijnsvb.bezwaar.beschikking.submit);
    mijnsvb.bezwaar.beschikking.laad();
});