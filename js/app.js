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

// Hide picture to picture mode
const isFirefox = typeof InstallTrigger !== 'undefined'

if (isFirefox) {
  const videoElements = document.getElementsByClassName('disable-pip')

  for (let i = 0; i < videoElements.length; i++) {
    videoElements[i].setAttribute('disablepictureinpicture', true)
  }
}

// Side Menu Show
const menuBtn = document.querySelector('.menu__btn')
const sliderMenu = document.getElementById('sliderMenu')

function toggleMenu () {
  sliderMenu.classList.toggle('open')
  menuBtn.classList.toggle('menu__transparent')
}
