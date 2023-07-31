const bestSellers = [
  {
    id: 1,
    img: './assets/stocks/5.png',
    title: 'Ultra Hiking Boots',
    description: 'Easy to Dry. Able to carry around. Sole can replaceable.',
    price: 249,
    discount: 385
  },
  {
    id: 2,
    img: './assets/stocks/2.png',
    title: 'Cooking double set',
    description: 'Handdle can foldable. Can carry with backpack.',
    price: 78,
    discount: 119
  },
  {
    id: 3,
    img: './assets/stocks/3.png',
    title: 'Camping backpack',
    description: 'One of the lightest backpacks for camping. Water proof.',
    price: 139,
    discount: 179
  },
  {
    id: 4,
    img: './assets/stocks/4.png',
    title: 'Single Sleeping Bag',
    description: 'Able to carry around. Light weight. Water proof.',
    price: 129,
    discount: 149
  },
  {
    id: 5,
    img: './assets/stocks/1.png',
    title: 'Single Camping Tent',
    description: 'Double sheet covered. Wind Proof.',
    price: 249,
    discount: 396
  },
  {
    id: 6,
    img: './assets/stocks/6.png',
    title: 'Classical Lamp',
    description: 'Good for who wants vintage vibe while camping.',
    price: 99,
    discount: 125
  },
  {
    id: 7,
    img: './assets/stocks/7.png',
    title: 'Magnetic Compass',
    description: 'Able to carry around and water proof.',
    price: 159,
    discount: 239
  },
  {
    id: 8,
    img: './assets/stocks/8.png',
    title: 'Medium Battery Touch',
    description: 'Only 40 minutes to full charge. Powerful touch.',
    price: 47,
    discount: 78
  }
]

// Humbarger Menu Button
function toggleMenu () {
  // Side Menu Show
  const menuBtn = document.querySelector('.menu__btn')
  const sliderMenu = document.getElementById('sliderMenu')
  sliderMenu.classList.toggle('open')
  menuBtn.classList.toggle('menu__transparent')
}

// App scope start here
document.addEventListener('DOMContentLoaded', () => {
  // Function to hide the loading screen
  function hideLoadingScreen () {
    const loadingScreen = document.getElementById('loader__container')
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
  var cloneSlide = document.querySelector('.logo__slide')?.cloneNode(true)
  document.querySelector('.brand__slider__section')?.appendChild(cloneSlide)

  // Add to equipment section
  let equipmentGrid = document.getElementById('equipmentGrid')

  function bestSeller () {
    equipmentGrid.innerHTML = bestSellers.map(item => {
      const { id, img, title, description, price, discount } = item
      return(
        `<div class="grid__item">
        <img src=${img} alt="tent" class="stock__img">
        <a href="#" class="stock__title">${title}</a>
        <p class="review">${description}</p>
        <p class="price"><span>$${price}</span><del>$${discount}</del></p>
        <hr>
        <div class="shop__container stock__buttons">
          <button onclick="addToCart(this);"><i class="fa-solid fa-cart-plus"></i>Shop Now</button>
          <p>Free Shipping</p>
        </div>
      </div>`
      )
    }).join('')
  }

  bestSeller()
})
