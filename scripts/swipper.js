// Если Swiper доступен глобально
export const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // Добавьте необходимые параметры инициализации
});

// Если используете модульную систему:
// import Swiper from 'swiper';
// export const swiper = new Swiper(...);