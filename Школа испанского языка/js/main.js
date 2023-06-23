/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
function init(){
	// Создание карты.
	var map = new ymaps.Map('map', {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [59.917795,30.350938],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[59.917795,30.350938],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Лиговский пр. 133 Е</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+7 (812) 123-45-67</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);
	ymaps.ready(init);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип

	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}

//burger mobile nav

const navBtn = document.querySelector('.nav-icon-btn');
const header_mobile = document.querySelector('.header-mobile');
const header_bottom = document.querySelector('.header__bottom');
const navIcon = document.querySelector('.nav-icon');
const header = document.querySelector('.header');


navBtn.onclick = function () {
	header_mobile.classList.toggle('header-mobile--active');
	header_bottom.classList.toggle('header__bottom-mobile');
	header.classList.toggle('header-active');
	navIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
}