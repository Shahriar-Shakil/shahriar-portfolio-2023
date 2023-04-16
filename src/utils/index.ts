export const settings = {
  className: "horizontal-carousel",

  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const settingsVertical = {
  className: "vertical-carousel",
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 3,
  slidesPerRow: 1,
  arrows: false,
  // vertical: true,
  // verticalSwiping: true,
  swipeToSlide: true,
  // responsive: [
  //   {
  //     breakpoint: 700,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};
export const imageCarousel = {
  className: "imageCarousel",
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  // responsive: [
  //   {
  //     breakpoint: 700,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};
