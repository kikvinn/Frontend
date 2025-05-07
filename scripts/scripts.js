window.addEventListener("load", function () {
    var preloader = document.querySelector('.preloader');
    setTimeout(function () {
      preloader.classList.add('hidden');
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 500);
    }, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  
    var modalOverlay = document.querySelector('.modal-overlay');
    var cancelButtons = document.querySelectorAll('.modal__button--cancel, .modal-overlay');
    
    document.querySelectorAll('.header__nav-link--sign-up, .header__nav-link--log-in').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        modalOverlay.classList.remove('modal-overlay--hidden');
        document.body.style.overflow = 'hidden';
      });
    });
  
    cancelButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        modalOverlay.classList.add('modal-overlay--hidden');
        document.body.style.overflow = '';
      });
    });
  
    var modalElement = document.querySelector('.modal');
    if (modalElement) {
      modalElement.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  });
  