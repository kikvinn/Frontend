export function preloader() {
  const preloader = document.querySelector('.preloader');
  
  // Скрываем прелоадер когда все ресурсы загружены
  window.addEventListener('load', () => {
      preloader.classList.add('hidden');
      
      setTimeout(() => {
          preloader.remove();
      }, 500);
  });
}