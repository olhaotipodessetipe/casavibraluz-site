// CASA VIBRA LUZ — script principal
// Responsável por: estado do cabeçalho ao rolar, menu mobile, ano do rodapé.

document.addEventListener('DOMContentLoaded', function () {
  var cabecalho = document.querySelector('.cabecalho');
  var menuMobile = document.querySelector('.menu-mobile');
  var botaoAbrir = document.querySelector('.botao-menu');
  var botaoFechar = document.querySelector('.fechar-menu');

  function atualizarCabecalho() {
    if (!cabecalho) return;
    if (window.scrollY > 40) {
      cabecalho.classList.add('rolado');
    } else if (!document.body.classList.contains('pagina-interna')) {
      cabecalho.classList.remove('rolado');
    }
  }

  window.addEventListener('scroll', atualizarCabecalho, { passive: true });
  atualizarCabecalho();

  if (botaoAbrir && menuMobile) {
    botaoAbrir.addEventListener('click', function () {
      menuMobile.classList.add('aberto');
      document.body.style.overflow = 'hidden';
    });
  }

  if (botaoFechar && menuMobile) {
    botaoFechar.addEventListener('click', function () {
      menuMobile.classList.remove('aberto');
      document.body.style.overflow = '';
    });
  }

  if (menuMobile) {
    menuMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuMobile.classList.remove('aberto');
        document.body.style.overflow = '';
      });
    });
  }

  var anoEl = document.querySelector('[data-ano-atual]');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
});
