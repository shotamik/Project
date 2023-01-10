
const slides = document.querySelectorAll(".slide");

const pgnBtns = document.querySelectorAll(".pagination-bullets span");

const startAutoSlider = document.querySelector(".start-auto-slider");

const sliderWrapper = document.querySelector(".slider-wrapper");

let activeIndex = 0;
let sliderIntervalId = null;

function pgnBtnsActions() {
	pgnBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			activeIndex = index;

			renderSliders();
			renderPgnBtns();

			updateActiveClasses(pgnBtns);

			updateActiveClasses(slides);
		});
	});
}

function renderSliders() {
	slides.forEach((slide, index) => {

		if (activeIndex === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

function renderPgnBtns() {
	pgnBtns.forEach((btn, index) => {
		if (activeIndex === index) {
			btn.classList.add("active");
		} else {
			btn.classList.remove("active");
		}
	});
}

function updateActiveClasses(arr) {
	arr.forEach((el, index) => {
		if (activeIndex === index) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	});
}

function nextSlide() {

	if (activeIndex === slides.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	renderSliders();
	renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);
}



function startAutoSlidingFn() {
	sliderIntervalId = setInterval(nextSlide, 2000);
}



function initSlider() {
	renderSliders();
	renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);

	pgnBtnsActions();


	startAutoSlidingFn();


}



initSlider();




const section = document.querySelector(".div6");
const spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
	spans.forEach((span) => {
	span.style.width = span.dataset.width;
	});
  }
};


const slidess = document.querySelectorAll(".slidee");
const pgnBtnss = document.querySelectorAll(".pagination-bulletss span");
const sliderWrapperr = document.querySelector(".slider-wrapperr");




let activeIndexx = 0;

function pgnBtnsActionss() {
	pgnBtnss.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			activeIndexx = index;

			renderSliderss();
			renderPgnBtnss();

			updateActiveClassess(pgnBtnss);

			updateActiveClassess(slidess);
		});
	});
}




function renderSliderss() {
	slidess.forEach((slidee, index) => {

		if (activeIndexx === index) {
			slidee.classList.add("activee");
		} else {
			slidee.classList.remove("activee");
		}
	});
}



function renderPgnBtnss() {
	pgnBtnss.forEach((btn, index) => {
		if (activeIndexx === index) {
			btn.classList.add("activee");
		} else {
			btn.classList.remove("activee");
		}
	});
}



function updateActiveClassess(arr) {
	arr.forEach((el, index) => {
		if (activeIndexx === index) {
			el.classList.add("activee");
		} else {
			el.classList.remove("activee");
		}
	});
}





function initSliderr() {
	renderSliderss();
	renderPgnBtnss();

	updateActiveClassess(pgnBtnss);

	updateActiveClassess(slidess);

	pgnBtnsActionss();

	
}


initSliderr();


const projectBtns = document.querySelectorAll(".pinklinediv");
const projects = document.querySelectorAll(".projects");
let activeIndexes = 0;




function renderProjects() {
	projects.forEach((projects, index) => {

		if (activeIndexes === index) {
			projects.classList.add("activ");
		} else {
			projects.classList.remove("activ");

		}
		
		
	})
}


function renderProjectBtns() {
	projectBtns.forEach((btn, index) => {
		
		if (activeIndexes === index) {
			btn.classList.add("activ");
		} else {
			btn.classList.remove("activ");
		}
	})
}

function updateActiveClass(arr) {
	arr.forEach((el, index) => {
		
		if (activeIndexes === index + 1) {
			el.classList.add("activ");
		} else {
			el.classList.remove("activ");
		}
		if (activeIndexes === 0) {
			el.classList.add("activ");
		}
		
	})
}

function projectBtnsActions() {
	projectBtns.forEach((btn, index) => {

		btn.addEventListener("click", () => {
			activeIndexes = index;
			renderProjects();
			renderProjectBtns()
			updateActiveClass(projectBtns);
			updateActiveClass(projects);
		})

		
		
	})
}

function initProject() {
	renderProjects();
	renderProjectBtns();
	updateActiveClass(projectBtns);
	updateActiveClass(projects);
	projectBtnsActions();
}

initProject();







const Form1 = document.querySelector("#reg"),
	userName = document.querySelector("#user_name"),
	userWebsite = document.querySelector("#website"),
	userMessage = document.querySelector("#message"),
	userEmail = document.querySelector("#user_email");




	function fillForm1(user) {
		userName.value = user.first_name;
		userEmail.value = user.email;
		userWebsite = user.website;
		userMessage = user.usermessage

	}


function addNewUser(info) {
	fetch("https://borjomi.loremipsum.ge/api/send-message", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(info),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			

		})
		.catch((err) => {
			console.log(err);
		});
}



Form1.addEventListener("submit", (e) => {
	e.preventDefault();

	const userNameValue = userName.value;
	const userEmailValue = userEmail.value;
	const userWebsiteValue = userWebsite.value;
	const userMessageValue = userMessage.value;


	const user = {
		name: userNameValue,
		website: userWebsiteValue,
		message: userMessageValue,
		
		email: userEmailValue,
		
	};

	if (user.id) {
		updateUser(user);
	} else {
		addNewUser(user);
	}
});


function showSelectedModal(selector) {
	const modal = document.querySelector(selector);
	const closeModalBtn = modal.querySelector(".modal-close");
	modal.classList.add("open");
	closeModalBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}


document.querySelector(".open-modal").addEventListener("click", () => {
	showSelectedModal("#sign-up-modal");
});