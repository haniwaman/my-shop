// Put your applicaiton javascript here
window.addEventListener(
  "DOMContentLoaded",
  function () {
    var swiperThumbnail = new Swiper("#product-sub-slider", {
      spaceBetween: 0,
			slidesPerView: 4,
			freeMode: true,
      allowTouchMove: false,
		});

    var swiperMain = new Swiper("#product-main-slider", {
			spaceBetween: 0,
			effect: "fade",
      thumbs: {
        swiper: swiperThumbnail,
			},
			autoplay: {
				delay: 3000,
			},
			slideToClickedSlide: false,
		});

		var swiperTop = new Swiper('#top-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true
			},
		});
  },
  false
);
