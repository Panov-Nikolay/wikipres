document.querySelectorAll('.collapse').forEach(collapse => {
	collapse.querySelectorAll('.collapseHeading').forEach(element => {
		element.addEventListener('click', () => {
			if (element.classList.contains('collapseClosed')) {
				element.classList.add('collapseOpened')
				element.classList.remove('collapseClosed')
				const img = element.querySelector('.closed')
				img.classList.add('opened')
				img.classList.remove('closed')
				collapse.querySelector('.collapseContent').classList.remove('hidden')
			} else if (element.classList.contains('collapseOpened')) {
				element.classList.add('collapseClosed')
				element.classList.remove('collapseOpened')
				const img = element.querySelector('.opened')
				img.classList.add('closed')
				img.classList.remove('opened')
				collapse.querySelector('.collapseContent').classList.add('hidden')
			}
		})
	})
})
const menuBtn = document.querySelector('.menuBtn')
const exitMenuBtn = document.querySelector('#exitMenuBtn')

const sideMenu = document.querySelector('.sideMenu')
menuBtn.addEventListener('click', () => {
	sideMenu.classList.contains('hidden')
		? sideMenu.classList.remove('hidden')
		: null
	sideMenu.addEventListener('touchmove', e => e.preventDefault(), {
		passive: false,
	})
})
exitMenuBtn.addEventListener('click', () => {
	!sideMenu.classList.contains('hidden')
		? sideMenu.classList.add('hidden')
		: null
	sideMenu.removeEventListener('touchmove', e => e.preventDefault())
})

const h1 = document.querySelector('h1')
let isOpened1 = false
h1.addEventListener('click', () => {
	h1.textContent = 'Самая Лучная Девушка на свете ❤️'
	isOpened1 = true
})

const translator = document.querySelector('.actions .leftBar img')
const translatorHiddenText = document.querySelector('.actions .leftBar span')
let isOpened2 = false
translator.addEventListener('click', () => {
	if (isOpened1) {
		translatorHiddenText.classList.remove('hiddenText')
		isOpened2 = true
	}
})

const search = document.querySelector('.search')
const searchHiddenText = document.querySelector('tbody .img td span')
let isOpened3 = false
search.addEventListener('click', () => {
	if (isOpened2) {
		searchHiddenText.classList.remove('hiddenText')
		isOpened3 = true
	}
})

const enter = document.querySelector('.personalElement.surpriseBtn')
const heart = document.querySelector('.sideMenuContent .heart img')
let isOpened4 = false
enter.addEventListener('click', () => {
	if (isOpened3) {
		heart.classList.remove('hiddenDiv')
		isOpened4 = true
	}
})

heart.addEventListener('click', () => {
	if (isOpened4) {
		document.location.replace('https://vk.com/bykovartemm')
	}
})
