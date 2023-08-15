const bestSellers = [
  {
    id: 1,
    img: "./assets/stocks/5.png",
    title: "Ultra Hiking Boots",
    description: "Easy to Dry. Able to carry around. Sole can replaceable.",
    price: 249,
    discount: 385,
    count: 1,
  },
  {
    id: 2,
    img: "./assets/stocks/2.png",
    title: "Cooking double set",
    description: "Handdle can foldable. Can carry with backpack.",
    price: 78,
    discount: 119,
    count: 1,
  },
  {
    id: 3,
    img: "./assets/stocks/3.png",
    title: "Camping backpack",
    description: "One of the lightest backpacks for camping. Water proof.",
    price: 139,
    discount: 179,
    count: 1,
  },
  {
    id: 4,
    img: "./assets/stocks/4.png",
    title: "Single Sleeping Bag",
    description: "Able to carry around. Light weight. Water proof.",
    price: 129,
    discount: 149,
    count: 1,
  },
  {
    id: 5,
    img: "./assets/stocks/1.png",
    title: "Single Camping Tent",
    description: "Double sheet covered. Wind Proof.",
    price: 249,
    discount: 396,
    count: 1,
  },
  {
    id: 6,
    img: "./assets/stocks/6.png",
    title: "Classical Lamp",
    description: "Good for who wants vintage vibe while camping.",
    price: 99,
    discount: 125,
    count: 1,
  },
  {
    id: 7,
    img: "./assets/stocks/7.png",
    title: "Magnetic Compass",
    description: "Able to carry around and water proof.",
    price: 159,
    discount: 239,
    count: 1,
  },
  {
    id: 8,
    img: "./assets/stocks/8.png",
    title: "Medium Battery Touch",
    description: "Only 40 minutes to full charge. Powerful touch.",
    price: 47,
    discount: 78,
    count: 1,
  },
];

const furnitures = [
  {
    id: 9,
    img: "./assets/furniture/5.png",
    title: "Portable steel based table set",
    description: "Able to sit by four person. Easy to fold and carry.",
    price: 149,
    discount: 234,
    count: 1,
  },
  {
    id: 10,
    img: "./assets/furniture/2.png",
    title: "Portable steel+wood table set",
    description: "Able to sit by four person. Easy to fold and carry.",
    price: 219,
    discount: 264,
    count: 1,
  },
  {
    id: 11,
    img: "./assets/furniture/3.png",
    title: "High Fold Camping Chair",
    description: "Able to use at both outdoor and indoor and handle 200kg.",
    price: 159,
    discount: 199,
    count: 1,
  },
  {
    id: 12,
    img: "./assets/furniture/4.png",
    title: "Outdoor BBQ high table",
    description: "Able to use while cooking. Easy to clean up.",
    price: 134,
    discount: 169,
    count: 1,
  },
  {
    id: 13,
    img: "./assets/furniture/1.png",
    title: "Single Camping Outdoor Chair",
    description: "Able to handle 200kg, easy to carry around, and easy to dry.",
    price: 249,
    discount: 385,
    count: 1,
  },
  {
    id: 14,
    img: "./assets/furniture/6.png",
    title: "Camping low Table Set",
    description: "Able to handle 200kg, easy to carry around and water proof",
    price: 319,
    discount: 365,
    count: 1,
  },
  {
    id: 15,
    img: "./assets/furniture/7.png",
    title: "Single folding fishing chair",
    description: "Able to handle 200kg, easy to carry around and water proof.",
    price: 359,
    discount: 459,
    count: 1,
  },
  {
    id: 16,
    img: "./assets/furniture/8.png",
    title: "Party Outdoor Table Set",
    description: "Easy to dry, can handle 200kg each with full size tea table.",
    price: 469,
    discount: 535,
    count: 1,
  },
];

const porpularProduct = [
  {
    id: 100,
    img: "./assets/bestseller/1.png",
    title: " REI Co-op Base Camp 6",
    description: "Best quality yet reasonable price. Top choice for campers",
    price: 275,
    discount: 350,
    count: 1,
  },
];

// Humbarger Menu Button
function toggleMenu() {
  // Side Menu Show
  const menuBtn = document.querySelector(".menu__btn");
  const sliderMenu = document.getElementById("sliderMenu");
  sliderMenu.classList.toggle("open");
  menuBtn.classList.toggle("menu__transparent");
}

// Alert Message
const customAlert = document.getElementById("customAlert");
const customAlertMessage = document.getElementById("customAlertMessage");

function showCustomAlert(message) {
  customAlertMessage.textContent = message;
  customAlert.classList.add("show");

  setTimeout(() => {
    customAlert.classList.remove("show");
  }, 1500);
}

const addToCart = (item) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartIcon = $(".cart__icon");
  console.log(cartIcon);

  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (!existingItem) {
    cartItems.push(item);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    showCustomAlert("Item added to cart!");
  } else {
    showCustomAlert("Item already in cart!");
  }
};

// App scope start here
document.addEventListener("DOMContentLoaded", () => {
  // Function to hide the loading screen
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loader__container");
    loadingScreen.style.display = "none";
  }

  $(function () {
    $("#header__placeholder").load("header.html");
    $("#footer__placeholder").load("footer.html");
  });

  // Call the hideLoadingScreen function when the content is fully loaded
  hideLoadingScreen();

  // Parallax effect
  const parallax_el = document.querySelectorAll(".parallax");

  let xValue = 0,
    yValue = 0;

  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;

      el.style.transform = `translate(calc(0% + ${
        -xValue * speedx
      }px/15), calc(0% + ${yValue * speedy}px/10))`;
    });
  });

  // Navbar hide when user scroll is more than 200

  function toggleHeaderVisibility() {
    const scrollTop = document.querySelector(".scroll__top");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      scrollTop?.classList.add("show");
      scrollTop?.classList.remove("hide");
    } else if (scrollPosition <= 200) {
      scrollTop?.classList.remove("show");
      scrollTop?.classList.add("hide");
    }
  }

  // Event listener for scroll event
  window.addEventListener("scroll", toggleHeaderVisibility);

  // Hide picture to picture mode
  const isFirefox = typeof InstallTrigger !== "undefined";

  if (isFirefox) {
    const videoElements = document.getElementsByClassName("disable-pip");

    for (let i = 0; i < videoElements.length; i++) {
      videoElements[i].setAttribute("disablepictureinpicture", true);
    }
  }

  // Cloning Brand slide Node
  var cloneSlide = document.querySelector(".logo__slide")?.cloneNode(true);
  document.querySelector(".brand__slider__section")?.appendChild(cloneSlide);

  // Add to equipment section
  let equipmentGrid = document.getElementById("equipmentGrid");

  function bestSellerDisplay() {
    if (equipmentGrid) {
      equipmentGrid.innerHTML = bestSellers
        .map((item, index) => {
          const { img, title, description, price, discount } = item;
          return `<div class="grid__item" data-aos="fade-up" data-aos-delay=${
            index * 200
          }>
        <img src=${img} alt="tent" class="stock__img">
        <a href="#" class="stock__title">${title}</a>
        <p class="review">${description}</p>
        <p class="price"><span>$${price}</span><del>$${discount}</del></p>
        <hr>
        <div class="shop__container stock__buttons">
          <button onClick='addToCart(${JSON.stringify(
            item
          )});'><i class="fa-solid fa-cart-plus"></i>Shop Now</button>
          <p>Free Shipping</p>
        </div>
      </div>`;
        })
        .join("");
    } else {
      return;
    }
  }

  bestSellerDisplay();

  // Add to equipment section
  let furnitureGrid = document.getElementById("furnitureGrid");

  function furnitureDisplay() {
    if (furnitureGrid) {
      furnitureGrid.innerHTML = furnitures
        .map((item, index) => {
          const { img, title, description, price, discount } = item;
          return `<div class="grid__item" data-aos="fade-up" data-aos-delay=${
            index * 200
          }>
        <img src=${img} alt="tent" class="stock__img">
        <a href="#" class="stock__title">${title}</a>
        <p class="review">${description}</p>
        <p class="price"><span>$${price}</span><del>$${discount}</del></p>
        <hr>
        <div class="shop__container stock__buttons">
          <button onClick='addToCart(${JSON.stringify(
            item
          )});'><i class="fa-solid fa-cart-plus"></i>Shop Now</button>
          <p>Free Shipping</p>
        </div>
      </div>`;
        })
        .join("");
    } else {
      return;
    }
  }

  furnitureDisplay();
});

const porpularProductGrid = document.getElementById("popularProductGrid");

function porpularProductDisplay() {
  if (porpularProductGrid) {
    porpularProductGrid.innerHTML = porpularProduct
      .map((item) => {
        const { img, title, price, discount } = item;
        return `<div class="bestseller__container">

        <div class="swiper__container">
            <p class="bestseller__tag">Best Seller</p>
            <!-- Swiper -->
            <div class="swiper best__seller">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src=${img} alt="tent" class="bestseller__img">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bestseller/2.png" alt="tent" class="bestseller__img">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bestseller/3.png" alt="tent" class="bestseller__img">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/bestseller/4.png" alt="tent" class="bestseller__img">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>


        <!-- Best seller card section -->
        <div class="bestseller__content">
            <h2>Best Overall Camping Tent</h2>
            <a href="#" class="tenttitle">
                ${title}
            </a>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <a href="#" class="review__link">3.9 | 160 reviews</a>
            </div>
            <div class="bestseller__detail">
                <p>
                    <span class="specs__bold">Specs</span>
                </p>
                <p>
                    <span class="specs__bold">Floor area :</span>
                    84 sq. ft.
                </p>
                <p>
                    <span class="specs__bold">Weight :</span>
                    20 lbs., 10 oz.
                </p>
                <p>
                    <span class="specs__bold">Height :</span>
                    74"
                </p>
                <p>
                    <span class="specs__bold">Footprint included :</span>
                    No
                </p>
                <p>
                    <span class="specs__bold">Number of doors :</span>
                    Two
                </p>
            </div>
            <div>
                <p class="price">
                    <span>$${price}</span>
                    <del>$${discount}</del>
                </p>
                <div class="shop__container">
                    <button onClick='addToCart(${JSON.stringify(
                      item
                    )});'><i class="fa-solid fa-cart-plus"></i>Shop Now</button>
                    <p></i>Free Shipping</p>
                </div>
            </div>

        </div>
    </div>`;
      })
      .join("");
  } else {
    return;
  }
}

porpularProductDisplay();

// Review from reset
function resetForm() {
  const inputFields = document.querySelectorAll(".app-form-control");
  inputFields.forEach((input) => {
    input.value = "";
  });
}
