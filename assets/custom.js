document.querySelectorAll('.accordion-toggle').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault()
    });
});

$('.add-to-cart').on('mouseenter',function(e) {
    e.preventDefault()
    $(this).closest('.collection-item').find('.alert').html('ADD TO CART')
});

$('.add-to-cart').on('mouseleave',function(e) {
    e.preventDefault()
    $(this).closest('.collection-item').find('.alert').html('')
});

$('.add-to-cart').on('click',function(e) {
    $(this).closest('.collection-item').find('.alert').html('THANK YOU')
});

$('.product-sold_out').on('click',function(e) {
    $(this).closest('.collection-item').find('.alert').html('ERROR')
});