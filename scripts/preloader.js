export function preloader(){
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('hidden');
  
  // Удаляем прелоадер из DOM после анимации
  setTimeout(() => {
      preloader.remove();
  }, 500);
});
}