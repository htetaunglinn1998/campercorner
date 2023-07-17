const parallax_el = document.querySelectorAll('.parallax')

let xValue = 0,
  yValue = 0

window.addEventListener('mousemove', e => {
  xValue = e.clientX - window.innerWidth / 2
  yValue = e.clientY - window.innerHeight / 2

  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx
    let speedy = el.dataset.speedy

    el.style.transform = `translate(calc(0% + ${
      -xValue * speedx
    }px/15), calc(0% + ${yValue * speedy}px/10)) `
  })
})

const toggler = document.querySelector('.menu__toggler')
const menu = document.querySelector('.menu')

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active')
  menu.classList.toggle('active')
})

// Hide picture to picture mode
const isFirefox = typeof InstallTrigger !== 'undefined'

if (isFirefox) {
  const videoElements = document.getElementsByClassName('disable-pip')

  for (let i = 0; i < videoElements.length; i++) {
    videoElements[i].setAttribute('disablepictureinpicture', true)
  }
}
