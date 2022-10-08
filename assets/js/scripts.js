// Img svg to inline svg
const convertImages = (query, callback) => {
	const images = document.querySelectorAll(query);

	images.forEach(image => {
		fetch(image.src)
			.then(res => res.text())
			.then(data => {
				const parser = new DOMParser();
				const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

				if (image.id) svg.id = image.id;
				if (image.className) svg.classList = image.classList;

				image.parentNode.replaceChild(svg, image);
			})
			.then(callback)
			.catch(error => console.error(error))
	});
}

convertImages('.svg img');




// PERFECT PIXEL SCRIPT

let pPixel = document.querySelector(".pPixel");
if (pPixel) {
	if (pPixel.dataset.show) {
		pPixel.innerHTML +=
			"<style>.pPixel__img{top:0;left:0;position:absolute;width:100%;transition-duration:.3s;pointer-events:none;display:block;z-index:1000;background-repeat:no-repeat;background-position:50% 0px;}.pPixel__img.hd{display:none;}.pPixel__img.inv{filter:invert(100%)}.pPixel__btn{position:fixed;z-index:1000;top:50%;width:60px;height:36px;line-height:30px;text-align:center;color:#fff;cursor:pointer;border:3px solid yellow}.pPixel__hide{border-radius:0 180px 180px 0;background:green;left:0}.pPixel__inv{border-radius:180px 0 0 180px;background: red;right:0}</style>";
		pPixel.innerHTML +=
			'<div class="pPixel__btn pPixel__hide">hide</div><div class="pPixel__btn pPixel__inv">inv</div>';

		let pPixelImg = document.querySelector(".pPixel__img");
		let pPixelHide = document.querySelector(".pPixel__hide");
		let pPixelInv = document.querySelector(".pPixel__inv");

		if (pPixelImg || pPixelHide || pPixelInv) {
			let pPixSets = {
				opacity: pPixelImg.dataset.opacity,
				image: 'url("' + pPixelImg.dataset.img + '")',
				position: pPixelImg.dataset.position,
				imgHeight: pPixelImg.dataset.height,
			};

			pPixelImg.style.opacity = pPixSets.opacity;
			pPixelImg.style.backgroundImage = pPixSets.image;
			pPixelImg.style.backgroundPosition = pPixSets.position;
			pPixelImg.style.height = pPixSets.imgHeight;

			function pPixelFn(el, mod) {
				el.addEventListener("click", () => {
					pPixelImg.classList.toggle(mod);
					console.log(mod);
				});
			}

			pPixelFn(pPixelHide, "hd");
			pPixelFn(pPixelInv, "inv");
		}
	} else {
		pPixel.remove();
	}
}




// document.addEventListener("mousemove", parallax);

// function parallax(event) {
// 	this.querySelectorAll(".move").forEach((shift) => {
// 		const position = shift.getAttribute("value");
// 		const coofx = shift.getAttribute("coofx");
// 		const coofy = shift.getAttribute("coofy");
// 		const x = (window.innerWidth - event.pageX * position) / coofx;
// 		const y = (window.innerHeight - event.pageY * position) / coofy;

// 		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
// 		console.log(position);
// 		console.log(coofx);
// 		console.log(coofy);
// 	});
// }


// document.addEventListener("mousemove", parallaxX);

// function parallaxX(event) {
// 	this.querySelectorAll(".move").forEach((shift) => {
// 		const position = shift.getAttribute("value");
// 		const coofx = shift.getAttribute("coofx");
// 		const coofy = shift.getAttribute("coofy");
// 		const x = (window.innerWidth - event.pageX * position) / coofx;
// 		const y = (window.innerHeight - event.pageY * position) / coofy;

// 		const ssum = x + y;

// 		shift.style.transform = `translateX(${ssum})`;
// 		console.log(position);
// 		console.log(coofx);
// 		console.log(coofy);
// 	});
// }

$('.faq .title,.faq .button').click(function () {
	$('.item').removeClass('active');
	$('.faq .text').hide("slow");

	$(this).closest('.item').addClass('active');
	$(this).closest('.item').find('.text').show("slow");
});


// // init controller
// var controller = new ScrollMagic.Controller();

// // build scene
// var scene = new ScrollMagic.Scene({
// 		triggerElement: ".promo"
// 	})
// 	// trigger a velocity opaticy animation
// 	.setVelocity(".promo .phone", {
// 		transformX:100
// 	}, {
// 		duration: 400
// 	})
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);

// init controller
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		duration: 100
	}
});

// build scenes
// new ScrollMagic.Scene({
// 		offset: 400,
// 		triggerElement: ".promo"
// 	})
// 	.setClassToggle(".promo .phone", "animate") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);
// new ScrollMagic.Scene({
// 		triggerElement: "#sec2"
// 	})
// 	.setClassToggle("#high2", "active") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);
// new ScrollMagic.Scene({
// 		triggerElement: "#sec3"
// 	})
// 	.setClassToggle("#high3", "active") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);
// new ScrollMagic.Scene({
// 		triggerElement: "#sec4"
// 	})
// 	.setClassToggle("#high4", "active") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);


// $(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '.promo',
    triggerHook: .6
  })
  .setClassToggle('.promo', 'animate')
  .reverse(false)
  .addIndicators()
  .addTo(controller);

// });

AOS.init();