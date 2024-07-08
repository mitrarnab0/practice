$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$('#checkbox').on('change', function () {
    $('body').toggleClass('white-version');
    $('.ball').toggleClass('checked');
});



// $(document).ready(function () {
//     let COUNT02 = 600;
//     $('.likeOne').on('click', () => {
//         $('.likeOne').addClass('liked')
//         COUNT02++;
//         $('.count01').text(COUNT02);
//     });
// });

