$(".certificates__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
