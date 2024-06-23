const starsConteiner = document.querySelector(".NUE-rate__stars");
const stars = document.querySelectorAll(".NUE-rate__star");

starsConteiner.addEventListener("click", (e) => {
	if (e.target.closest(".NUE-rate__star")) {
		if (e.target.closest(".NUE-rate__not-active-star")) {
			const indexStar = e.target.id.split("index")[1];
			for (let i = 0; i < indexStar; i++) {
				stars[i].src = e.target.src = "../img/star.svg";
				stars[i].classList.remove("NUE-rate__not-active-star");
				stars[i].alt = "звезда";
			}
		} else {
			const indexStar = e.target.id.split("index")[1];
			for (let i = stars.length - 1; i >= indexStar; i--) {
				stars[i].src = "../img/starNotActive.svg";
				stars[i].classList.add("NUE-rate__not-active-star");
				stars[i].alt = "не активная звезда";
			}
		}
	}
});

const input = document.querySelector(".NUE-sub__input-email");
const inputWrapp = document.querySelector(".NUE-sub__input-wrapp");

input.addEventListener("focus", () => {
	if (window.innerWidth <= 680) {
		input.previousElementSibling.style =
			"min-width: 0px; width:0px; max-height:22px";
	} else {
		input.previousElementSibling.style =
			"min-width: 0px; width:0px; max-height:27px";
	}
	input.style = "border-left: none";
	inputWrapp.style = "gap:0px";
});
input.addEventListener("blur", () => {
	if (window.innerWidth <= 680) {
		input.previousElementSibling.style = "max-height:22px";
	} else {
		input.previousElementSibling.style = "max-height:27px";
	}
	setTimeout(() => {
		input.previousElementSibling.style = "";
	}, 300);
	input.style = "";
	inputWrapp.style = "";
});
