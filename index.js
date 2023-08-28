// Swiper
const swiper = new Swiper('.menu-slider__content', {
	watchSlidesProgress: true,
	slidesPerView: 'auto'
});

// Side menu
const burgerMenu = document.querySelector('.menu-content__burger-menu');
const sideMenuWrap = document.querySelector('.side-menu__wrapper');
const body = document.querySelector('body');
const sideMenu = document.querySelector('.side-menu');
const dropDown = document.querySelectorAll('.side-menu__submenu-opener');

const showSideMenu = () => {
	sideMenuWrap.classList.add('active');
	sideMenu.classList.add('side-menu--shadow');
};

const closeSideMenu = () => {
	sideMenuWrap.classList.remove('active');
	sideMenu.classList.remove('side-menu--shadow');
};

burgerMenu.addEventListener('click', e => {
	showSideMenu();
});

sideMenu.addEventListener('click', e => {
	if (e.target === e.currentTarget) {
		closeSideMenu();
	}

	if (e.target.classList.contains('side-menu__close')) {
		closeSideMenu();
	}
});

dropDown.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault();

		const form = document.querySelector('#order_form');

		if (form) {
			window.scrollTo({
				top: getCoords(form).top - 50,
				behavior: 'smooth'
			});
		}
	});
});

//Scroll to #order_form
function getCoords(elem) {
	const box = elem.getBoundingClientRect();

	return {
		top: box.top + window.scrollY,
		right: box.right + window.scrollY,
		bottom: box.bottom + window.scrollY,
		left: box.left + window.scrollY
	};
}

//MENU POSITION FIXED
const menu = document.querySelector('.menu-content');
const searchBtn = document.querySelector('.menu-content__icon-search');
const searchBtnLink = document.querySelector('.menu-content__icon-search a');
const menuContainer = document.querySelector('.menu-content-container');

let currentScrollCoords;

window.addEventListener('scroll', () => {
	const newScrollCoords = window.scrollY;
	const menuBasicPosition = getCoords(menuContainer).bottom;

	if (
		newScrollCoords < currentScrollCoords &&
		newScrollCoords > menuBasicPosition
	) {
		menu.classList.add('menu-content--fixed');
	} else {
		menu.classList.remove('menu-content--fixed');
	}

	if (searchBtnLink.classList.contains('hover-menu-search-ico')) {
		searchBtnLink.classList.remove('hover-menu-search-ico');
	}

	currentScrollCoords = newScrollCoords;
});

// Hover for search icon
searchBtn.addEventListener('mouseover', () => {
	searchBtnLink.classList.add('hover-menu-search-ico');
});

searchBtn.addEventListener('mouseout', () => {
	if (searchBtnLink.classList.contains('hover-menu-search-ico')) {
		searchBtnLink.classList.remove('hover-menu-search-ico');
	}
});

//Time and Date
const getDate = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const weekday = date.getDay();

	const months = [
		'січня',
		'лютого',
		'березня',
		'квітня',
		'травня',
		'червня',
		'липня',
		'серпня',
		'вересня',
		'жовтня',
		'листопада',
		'грудня'
	];
	const dayNames = [
		'Неділя',
		'Понеділок',
		'Вівторок',
		'Середа',
		'Четвер',
		"П'ятниця",
		'Субота'
	];

	document.querySelector('.header__date').innerHTML =
		dayNames[weekday] + ', ' + day + ' ' + months[month] + ' ' + year + ' року';
};

getDate();

const getTime = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const sec = date.getSeconds();

	document.querySelector('.header__time').innerHTML =
		(hour < 10 ? '0' : '') +
		hour +
		':' +
		(minute < 10 ? '0' : '') +
		minute +
		':' +
		(sec < 10 ? '0' : '') +
		sec;

	window.setTimeout('getTime()', 1000);
};

getTime();
