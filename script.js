const botaoMenu = document.getElementById('icone-menu');
const fecharMenu = document.getElementById('fechar-menu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

fecharMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

//BOTÃO PARA VOLTAR AO TOPO

 const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
//ANIMAÇÃO DE SURGIMENTO

function animarScroll() {
  const elementos = document.querySelectorAll('.surgir, .surgir-direita, .surgir-esquerda, .surgir-baixo');

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('aparecendo');
    } else {
      el.classList.remove('aparecendo'); // permite repetir ao rolar de volta
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
