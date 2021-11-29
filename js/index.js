$(document).ready(function(){

	var backToTop = document.getElementById("backToTop");
	var navTop = document.getElementById("navTop");
	var navVideo = document.getElementById("navVideo");
	var navArticle = document.getElementById("navArticle");

	backToTop.onclick = () => {
		document.getElementById('positionTop').scrollIntoView({ behavior: 'smooth' })
	}

	navTop.onclick = () => {
		document.getElementById('positionTop').scrollIntoView({ behavior: 'smooth' })
	}
	navVideo.onclick = () => {
		document.getElementById('positionVideo').scrollIntoView({ behavior: 'smooth' })
	}
	navArticle.onclick = () => {
		document.getElementById('positionArticle').scrollIntoView({ behavior: 'smooth' })
	}

	// header 下滑後變色、新增與移除 class

	$(window).scroll(function() {
		var top = $('#mainGreen').offset().top
		var scrollTop = $(window).scrollTop()
		if(scrollTop > top) {
			document.getElementById("header").classList.add("header-white") 
		} else {
			document.getElementById("header").classList.remove("header-white") 
		}
	})



	var swiper = new Swiper(".swiper1", {
		lazy: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 2500
		},
	})

	var swiper2 = new Swiper(".swiper2", {
		lazy: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 4000
		},
		on: {
			slideChange: function () {
				const index_currentSlide = this.realIndex;
				const currentSlide = this.slides[index_currentSlide]
				console.log(index_currentSlide)
				console.log(currentSlide)
			},
		},
	})






	
})