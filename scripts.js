let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function scrollProducts(direction) {
    const productCards = document.querySelector('.product-cards');
    const cardWidth = document.querySelector('.product-card').offsetWidth;
    const scrollAmount = cardWidth * direction;
    const currentScroll = productCards.style.transform.replace('translateX(', '').replace('px)', '') || 0;
    const newScroll = parseInt(currentScroll) + scrollAmount;
    productCards.style.transform = `translateX(${newScroll}px)`;
}

function initMap() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            center: [55.758448, 37.621669],
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark([55.758448, 37.621669], {
            balloonContent: ' Green Gallery '
        });

        myMap.geoObjects.add(myPlacemark);
    });
}

function showProduct(imageSrc, name, price, description) {
    document.getElementById('product-image').src = imageSrc;
    document.getElementById('product-name').innerText = name;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-details').style.display = 'block';
    window.scrollTo({ top: document.getElementById('product-details').offsetTop, behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Initialize the map when the page loads
window.onload = initMap;

const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  const galleryImages = document.querySelectorAll('#portfolio .gallery img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5, 
  });
  
  galleryImages.forEach(img => {
      observer.observe(img);
  });
  
  
  let activeImage = null;
  
  galleryImages.forEach(img => {
      img.addEventListener('click', () => {
          if(activeImage){
              activeImage.classList.remove('active');
          }
          img.classList.add('active');
          activeImage = img;
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const testimonialCards = document.getElementById('testimonial-cards');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reviewerName = document.getElementById('reviewerName').value;
        const reviewText = document.getElementById('reviewText').value;

        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        testimonialCard.innerHTML = `
            <p>${reviewText}</p>
            <span>- ${reviewerName}</span>
        `;

        testimonialCards.appendChild(testimonialCard);

        // Очистить форму
        reviewForm.reset();
    });
});
  



document.addEventListener('DOMContentLoaded', function() {
    const scrollToTop = document.getElementById('scroll-to-top');

    // Показать стрелочку при прокрутке страницы
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Переместить в начало страницы при нажатии на стрелочку
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Генерация случайных чисел для капчи
    const captchaModal = document.getElementById('captcha-modal');
    const captchaInput = document.getElementById('captcha-input');
    const captchaSubmit = document.getElementById('captcha-submit');
    const captchaNumbers = document.getElementById('captcha-numbers');

    const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    captchaNumbers.textContent = randomNumbers;

    captchaModal.style.display = 'flex';

    captchaSubmit.addEventListener('click', function() {
        const userInput = captchaInput.value.trim();
        if (userInput === randomNumbers) {
            captchaModal.style.display = 'none';
        } else {
            alert('Неверный ввод. Пожалуйста, попробуйте еще раз.');
        }
    });
});
