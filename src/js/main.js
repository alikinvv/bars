$('body').on('click', '.directions .item', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $('.directions .item').removeClass('active');
        $('.directions .content').slideUp().removeClass('active');
    } else {
        $('.directions .item').removeClass('active');
        $('.directions .content').slideUp().removeClass('active');
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).parent().next().slideDown().addClass('active');
    }
});

$("a[data-scroll]").click((e) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('section[data-scroll="' + $(e.currentTarget).attr('data-scroll') + '"]').offset().top
    }, 1500);
});