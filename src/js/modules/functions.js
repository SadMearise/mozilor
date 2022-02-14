export function isWebp() {
	function textWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	textWebP(function(support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}

export function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
        }
    }
}

export function toggleClassActive() {
	document.querySelector('.icon-menu').addEventListener('click', () => {
		document.querySelector('.icon-menu').classList.toggle('_active')
		document.querySelector('.menu__body').classList.toggle('_active')
		document.querySelector('body').classList.toggle('lock')
	})
}

export function sliderSlick() {
	$(function(){
		$('.slider').slick({
			slidesToShow: 4,
			speed: 300,
			infinite: false,
			responsive: [
				{
					breakpoint: 1150,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	  });
}


