function toggleMenu () {
  // Side Menu Show
  const menuBtn = document.querySelector('.menu__btn')
  const sliderMenu = document.getElementById('sliderMenu')
  sliderMenu.classList.toggle('open')
  menuBtn.classList.toggle('menu__transparent')
}

document.addEventListener('DOMContentLoaded', () => {
  // Function to hide the loading screen
  function hideLoadingScreen () {
    const loadingScreen = document.getElementById('loader__container')
    console.log(loadingScreen)
    loadingScreen.style.display = 'none'
  }

  $(function () {
    $('#header__placeholder').load('header.html')
    $('#footer__placeholder').load('footer.html')
  })

  // Call the hideLoadingScreen function when the content is fully loaded
  hideLoadingScreen()

  // Parallax effect
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
      }px/15), calc(0% + ${yValue * speedy}px/10))`
    })
  })

  // Navbar hide when user scroll is more than 200

  function toggleHeaderVisibility () {
    const header = document.querySelector('.header__section')
    const scrollTop = document.querySelector('.scroll__top')
    const scrollPosition = window.scrollY

    if (scrollPosition > 200) {
      header.classList.remove('show')
      header.classList.add('hide')
      scrollTop.classList.add('show')
      scrollTop.classList.remove('hide')
    } else if (scrollPosition <= 200) {
      header.classList.remove('hide')
      header.classList.add('show')
      scrollTop.classList.remove('show')
      scrollTop.classList.add('hide')
    }
  }

  // Event listener for scroll event
  window.addEventListener('scroll', toggleHeaderVisibility)

  // Hide picture to picture mode
  const isFirefox = typeof InstallTrigger !== 'undefined'

  if (isFirefox) {
    const videoElements = document.getElementsByClassName('disable-pip')

    for (let i = 0; i < videoElements.length; i++) {
      videoElements[i].setAttribute('disablepictureinpicture', true)
    }
  }

  // Cloning Brand slide Node
  var cloneSlide = document.querySelector('.logo__slide').cloneNode(true)
  document.querySelector('.brand__slider__section').appendChild(cloneSlide)
})
