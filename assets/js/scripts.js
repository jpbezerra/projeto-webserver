var tamanhoOriginalSidebar = 700;
var tamanhoExpandidoSidebar = 1330;

function mostrarfotos() {
    var fotos = document.getElementById('fotos');
    var fotos = Array.from(fotos.children);
    fotos.sort(() => Math.random() - 0.5);
    var fotosAleatoria = document.getElementById('fotos');
    fotos.forEach(foto => {
        fotosAleatoria.appendChild(foto);
    });
    fotosAleatoria.style.display = fotosAleatoria.style.display === 'none' ? 'block' : 'none';

    var sidebar = document.querySelector('.sidebar')
    
    if (sidebar.clientHeight == tamanhoExpandidoSidebar) {
        sidebar.style.height = tamanhoOriginalSidebar + 'px';
    }
    
    else {
        sidebar.style.height = tamanhoExpandidoSidebar + 'px';
    }
}

function abrir(guia) {
    var i, aba;
    aba = document.getElementsByClassName("aba");
    for (i = 0; i < aba.length; i++) {
        aba[i].classList.remove("ativa");
    }
    document.getElementById(guia).classList.add("ativa")
}
