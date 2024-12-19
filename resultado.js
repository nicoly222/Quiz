function resultadofinal(){
    let contMerida = 0;
    let contMoana = 0;
    let contTiana = 0;
    let contMulan = 0;

    let radios = document.querySelectorAll('input[type="radio"]');
    console.log(radios);

   
    radios.forEach(e => {
        if (e.checked) {
            if (e.value == "Merida") {
                contMerida++;
            } else if (e.value == "Moana") {
                contMoana++;
            } else if (e.value == "Tiana") {
                contTiana++;
            } else if (e.value == "Mulan") {
                contMulan++;
            }
        }
    });

    
    let resultado = `Merida = ${contMerida}<br>
    Moana = ${contMoana}<br> Tiana = ${contTiana}<br> Mulan = ${contMulan}`;

    document.getElementById("resultado").innerHTML = resultado;

   
    localStorage.setItem('merida', contMerida);
    localStorage.setItem('moana', contMoana);
    localStorage.setItem('tiana', contTiana);
    localStorage.setItem('mulan', contMulan);

    
    let maior = Math.max(contMoana, contTiana, contMulan, contMerida);

    
    let pagina;
    if (maior === contMoana) {
        pagina = 'TelaMoana.html';
    } else if (maior === contTiana) {
        pagina = 'TelaTiana.html';
    } else if (maior === contMulan) {
        pagina = 'TelaMulan.html';
    } else if (maior === contMerida) {
        pagina = 'TelaMerida.html';
    }

    
    setTimeout(() => {
        window.open(pagina);
    }, 5000);
}
