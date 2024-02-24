// Our Auto slider Code 

(function autoSlider() {
	$('.slider .active').each(function() {
		if (!$(this).is(':last-child')) {
			$(this).delay(3000).fadeOut(1000, function() {
				$(this).removeClass('active').next().addClass('active').fadeIn();
				autoSlider();
			});
		} else {
			$(this).delay(3000).fadeOut(1000,function(){
				$(this).removeClass('active');
				$('.slider div').eq(0).addClass('active').fadeIn();
				autoSlider();
			});
		}
	});
}());

// -----------------------------------------------


//  ---------------- Scroll to the Top Btn ----------------
let myBtn = document.querySelector(".updown");

let myAboutP = document.querySelector(".about");
let myPhoto = document.querySelector(".image");


window.onscroll = function () {
	console.log(window.scrollY);
	if (window.scrollY >= 800) {
		myBtn.style.display = 'block';
		myAboutP.classList.add("animate__animated");
		myAboutP.classList.add("animate__fadeInUpBig");
		myAboutP.classList.add("animate__faster");

		myPhoto.classList.add("animate__animated");
		myPhoto.classList.add("animate__tada");
		myPhoto.classList.add("animate__slow");
	} else {
		myBtn.style.display = 'none';
		myAboutP.classList.remove("animate__animated");
		myAboutP.classList.remove("animate__fadeInUpBig");
		myAboutP.classList.remove("animate__faster");

		myPhoto.classList.remove("animate__animated");
		myPhoto.classList.remove("animate__tada");
		myPhoto.classList.remove("animate__slow");
	}
};

myBtn.onclick = function () {
	window.scrollTo({
		left : 0,
		top: 0,
		behavior: "smooth",
	});
}


// ---------------- ANIMATE ICONS ----------------------------


