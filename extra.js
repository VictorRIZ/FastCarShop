window.alert('Para uma melhor experiência, recomenda-se o uso de um computador ou Notebook.')
$(document).ready(function () {
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');;
}

