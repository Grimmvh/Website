$(document).ready(function () {
    let $btns = $('.project-area .btn-group button');

    $btns.click(function (e) {
        $('.project-area .btn-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    $('.project-area .btn-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
});