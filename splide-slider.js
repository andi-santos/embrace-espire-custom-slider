//Features-Slider

new Splide("#features", {
type: "fade",
cover: true,
autoplay: true,
pauseOnHover: false,
pagination : "slider",
rewind: true,
arrows: "slider",
interval: 3400,
resetProgress: false,
pauseOnFocus: false,
classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows feature-slider-arrows',
		arrow : 'splide__arrow feature-slider-arrow',
		prev  : 'splide__arrow--prev feature-slider-prev',
		next  : 'splide__arrow--next feature-slider-next',
		
		// Add classes for pagination.
		pagination: 'splide__pagination feature-slider-pagination', // container
		page      : 'splide__pagination__page feature-slider-page', // each button
	},
}).mount();

//Testimonial-Slider

new Splide("#testimonial", {
type: "fade",
cover: true,
autoplay: true,
pauseOnHover: false,
pagination : "slider",
rewind: true,
arrows: true,
resetProgress: false,
pauseOnFocus: false,
interval: 3200,
	classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
		
		// Add classes for pagination.
		pagination: 'splide__pagination testimonial-slider-pagination', // container
		page      : 'splide__pagination__page testimonial-slider-page', // each button
	},
}).mount();

//Development-Slider

new Splide("#development", {
type: "fade",
easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
interval: 3500,
speed: 900,
cover: true,
autoplay: true,
pauseOnHover: false,
pagination : "slider",
rewind: true,
arrows: true,
resetProgress: false,
pauseOnFocus: false,
classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows development-slider-arrows',
		arrow : 'splide__arrow development-slider-arrow',
		prev  : 'splide__arrow--prev development-slider-prev',
		next  : 'splide__arrow--next development-slider-next',
		
		// Add classes for pagination.
		pagination: 'splide__pagination development-slider-pagination', // container
		page      : 'splide__pagination__page development-slider-page', // each button
	},
}).mount();

new Splide("#team", {
type: "fade",
cover: true,
autoplay: true,
pauseOnHover: false,
pagination : "slider",
rewind: true,
arrows: "slider",
interval: 3400,
resetProgress: false,
pauseOnFocus: false,
classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows team-slider-arrows',
		arrow : 'splide__arrow team-slider-arrow',
		prev  : 'splide__arrow--prev team-slider-prev',
		next  : 'splide__arrow--next team-slider-next',
		
		// Add classes for pagination.
		pagination: 'splide__pagination team-slider-pagination', // container
		page      : 'splide__pagination__page team-slider-page', // each button
	},
}).mount();




