(function(){
  var g = document.getElementById('banner');
  var ocupado = false;

  // separa cada digito en su propio span para animarlos uno por uno
  function dividir(el){
    var t = el.textContent;
    el.textContent = '';
    for (var i = 0; i < t.length; i++){
      var sp = document.createElement('span');
      sp.className = 'c';
      sp.style.setProperty('--i', i);
      sp.textContent = t.charAt(i);
      el.appendChild(sp);
    }
  }
  dividir(document.querySelector('.n1'));
  dividir(document.querySelector('.n2'));

  function mostrar(){
    g.classList.remove('activo','saliendo');
    void g.offsetWidth;            // reinicia las animaciones
    g.classList.add('activo');
  }
  function ocultar(){
    if (!g.classList.contains('activo')) return; // ya está oculto
    ocupado = true;
    g.classList.add('saliendo');
    setTimeout(function(){
      g.classList.remove('activo','saliendo');
      ocupado = false;
    }, 1750);
  }

  // Escucha la tecla 1 para toggle local (por si quieres usar teclado también)
  document.addEventListener('keydown', function(e){
    if (e.key !== '1' || e.repeat || ocupado) return;
    if (g.classList.contains('activo')) ocultar(); else mostrar();
  });

  // Exponer funciones globales para que PeerJS las llame
  window.bannerMostrar = mostrar;
  window.bannerOcultar = ocultar;
  window.bannerOcupado = function(){ return ocupado; };
})();
