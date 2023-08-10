let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
const cartItemsSection = document.querySelector('.cart__items')
const totalPriceSection = document.getElementById('totalPrice')
const checkoutBtn = document.getElementById('checkoutBtn')

function showCustomAlert (message) {
  customAlertMessage.textContent = message
  customAlert.classList.add('show')

  setTimeout(() => {
    customAlert.classList.remove('show')
  }, 1500) // Display alert for 3 seconds
}

function updateCart () {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))

  if (cartItems.length === 0) {
    cartItemsSection.innerHTML = '<p>Your cart is empty.</p>'
    checkoutBtn.classList.add('checkout__hidden')
  } else {
    const cartHTML = cartItems
      .map(item => {
        return `<div class="cart__item">
                    <img src="${item.img}" alt="${
          item.title
        }" class="cart__item__img">
                    <div class="cart__item__detail">
                        <h3 class='detail__heading'>${item.title}</h3>
                        <p>${item.description}</p>
                        <p class="price">$${item.count * item.price}</p>
                        <div class="cart__item__count">
                            <button class='count__btn' onClick="decreaseCount(${
                              item.id
                            })">-</button>
                            <span class='item__count'>${item.count}</span>
                            <button class='count__btn' onClick="increaseCount(${
                              item.id
                            })">+</button>
                        </div>
                    </div>
                </div>`
      })
      .join('')

    cartItemsSection.innerHTML = cartHTML
  }

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.count * item.price,
    0
  )
  totalPriceSection.textContent = totalPrice
}

updateCart()

function increaseCount (itemId) {
  const item = cartItems.find(item => item.id === itemId)
  if (item) {
    item.count += 1
    // Update the count element in the UI
    const countElement = document.querySelector(
      `[data-item-id="${itemId}"] span`
    )
    if (countElement) {
      countElement.textContent = item.count
    }
  }
  updateCart()
}

function decreaseCount (itemId) {
  const item = cartItems.find(item => item.id === itemId)
  if (item && item.count > 1) {
    item.count -= 1
    // Update the count element in the UI
    const countElement = document.querySelector(
      `[data-item-id="${itemId}"] span`
    )
    if (countElement) {
      countElement.textContent = item.count
    }
  } else {
    cartItems = cartItems.filter(cartItem => cartItem.id !== itemId)
  }
  updateCart()
}

function checkout () {
  showCustomAlert('Thanks for shopping with us!')
  cartItems = []
  updateCart()
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1500)
}

function handleBack () {
  window.history.back()
}
