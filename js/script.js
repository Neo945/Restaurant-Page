$(function () {
    $("#navbarToggle").blur(function (event) {
        var size = window.innerWidth;
        if (size < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});