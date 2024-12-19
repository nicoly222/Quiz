function resultadofinal(){
    let contMerida = 0;
    let contMoana = 0;
    let contTiana = 0;
    let contMulan = 0;

    let radios = document.querySelectorAll('input[type="radio"]');
    console.log(radios);

    // Conta os votos para cada personagem
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

    // Exibe os resultados na página
    let resultado = `Merida = ${contMerida}<br>
    Moana = ${contMoana}<br> Tiana = ${contTiana}<br> Mulan = ${contMulan}`;

    document.getElementById("resultado").innerHTML = resultado;

    // Salva os resultados no localStorage
    localStorage.setItem('merida', contMerida);
    localStorage.setItem('moana', contMoana);
    localStorage.setItem('tiana', contTiana);
    localStorage.setItem('mulan', contMulan);

    // Encontra o maior número de votos
    let maior = Math.max(contMoana, contTiana, contMulan, contMerida);

    // Determina qual página deve ser aberta com base no maior número de votos
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

    // Abre a página correspondente após 5 segundos
    setTimeout(() => {
        window.open(pagina);
    }, 5000);
}
