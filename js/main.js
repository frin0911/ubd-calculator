$(function () {
    closeLightbox();
    $('#lightbox-shadow').click(function (e) {
        closeLightbox();
    });
});

function lightbox(insertContent, ajaxContentUrl) {
    $('#lightbox').empty();
    if (insertContent != null) {
        $('#lightbox').append(insertContent);
    }

    if (ajaxContentUrl != null) {
        $('#lightbox').append('<p class="loading">Loading...</p>');
        $.ajax({
            type: 'GET',
            url: ajaxContentUrl,
            success: function (data) {
                $('#lightbox').empty();
                $('#lightbox').append(data);
            },
            error: function () {
                alert('AJAX Failure!');
            }
        });
    }

    $('#lightbox').css('top', $(window).scrollTop() + 100 + 'px');
    $('#lightbox').show();
    $('#lightbox-shadow').show();
}

function closeLightbox() {
    $('#lightbox').hide();
    $('#lightbox-shadow').hide();
    $('#lightbox').empty();
}

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function divide() {
    let input = document.getElementById("input");
    let display = document.getElementById("display");
    let result = document.getElementById("result");
    display.innerText = addCommas(input.value);
    result.innerText = String (input.value / 172212);
}

function multiply() {
    let input = document.getElementById("input");
    let display = document.getElementById("display");
    let result = document.getElementById("result");
    display.innerText = addCommas(input.value);
    result.innerText = String (input.value * 172212);
}
