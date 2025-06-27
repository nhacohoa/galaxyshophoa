function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Đã thêm "${name}" vào giỏ hàng.`);
}

let currentIndex = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

function showSlide(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function goToSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

// Auto slide
let autoSlideInterval = setInterval(nextSlide, 3000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

// Khởi động ban đầu
showSlide(0);
