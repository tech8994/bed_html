$('.banner_sldier').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
   // navText:["<i class="fas fa-chevron-left"></i>","<i class="fas fa-chevron-right"></i>"],
    responsive:{
        0:{
            items: 1,
        },
        576:{
            items: 1,
        },
        768:{
            items: 1,
        },
        992:{
            items: 1
        }
    }
});

$('.product_tabs_slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive:{
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 3,
        },
        1200:{
            items: 5
        }
    }
});

    /*--
        Product details slider 2
    -----------------------------------*/
    $('.pro-dec-big-img-slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-2',
    });
    
    /*--
        Product details 2 slick carousel as Nav
    --------------------------------------------*/
    $('.product-dec-slider-2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider-2',
        dots: false,
        focusOnSelect:true,
        fade: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                }
            }
        ]
    });


     // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });




    /*--------------------------------
        Cart active
    -----------------------------------*/
    if ($('.pro-details-action').length) {
        var $body = $('body'),
            $cartWrap = $('.pro-details-action'),
            $cartContent = $cartWrap.find('.product-dec-social');
        $cartWrap.on('click', '.social', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.product-dec-social').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.product-dec-social').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.pro-details-action') && !$($target).parents().is('.pro-details-action') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }

    /*------- Color active -----*/
    $('.pro-details-color-content').on('click', 'a', function(e){
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });
    