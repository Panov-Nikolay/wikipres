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
})
exitMenuBtn.addEventListener('click', () => {
	!sideMenu.classList.contains('hidden')
		? sideMenu.classList.add('hidden')
		: null
})
