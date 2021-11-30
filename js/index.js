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
		document.getElementById('mainGreen').scrollIntoView({ behavior: 'smooth' })
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
		pagination: {
			el: ".swiper-pagination",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			slideChange: function () {
				const index_currentSlide = this.realIndex;
				const currentSlide = this.slides[index_currentSlide]
				if(index_currentSlide == 0) {
					document.getElementById('videoHead').textContent = '中華電信基金會用創新設計營造社區共好'
					document.getElementById('videoText').textContent = '媒合設計師生團隊與社區夥伴，用共創與設計回應在地的需求，這是以社會設計支持社區的起點，期待看見更多在地而生的永續共好。'
				} else if(index_currentSlide == 1) {
					document.getElementById('videoHead').textContent = '「2020蹲點創新設計行動」隆重上映！'
					document.getElementById('videoText').textContent = '中華電信基金會攜手師生，點亮社區地方創生。驚艷國際級設計師蕭青陽的設計成果，看熱血師生用地方創生翻轉社區！'
				}
			},
		},
	})






	
})