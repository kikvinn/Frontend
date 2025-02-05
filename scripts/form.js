document.getElementById('openModal').onclick = function() {
  document.getElementById('modal').style.display = 'block';
}

document.getElementsByClassName('modal__close')[0].onclick = function() {
  document.getElementById('modal').style.display = 'none';
}

document.getElementById('cancel').onclick = function() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
  }
}