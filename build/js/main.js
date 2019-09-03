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