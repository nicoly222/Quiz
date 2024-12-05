function resultadofinal() {
    let contMerida = 0;
    let contMoana = 0;
    let contTiana = 0;
    let contMulan = 0;

    let radios = document.querySelectorAll('input[type="radio"]'); // Corrigido o método
    console.log(radios);

    radios.forEach(e => {
        if (e.checked) {
            if (e.value === "Merida") {
                contMerida++;
            } else if (e.value === "Moana") { // Corrigido o erro de digitação
                contMoana++;
            } else if (e.value === "Tiana") { // Corrigido o erro de digitação
                contTiana++;
            } else if (e.value === "Mulan") {
                contMulan++;
            }
        }
    });

    let resultado = `Merida = ${contMerida}<br>
    Moana = ${contMoana}<br> Tiana = ${contTiana}<br> Mulan = ${contMulan}`;

    document.getElementById("resultado").innerHTML = resultado;

    // Armazenando os resultados no localStorage
    localStorage.setItem('merida', contMerida);
    localStorage.setItem('moana', contMoana); // Corrigido o erro de digitação
    localStorage.setItem('tiana', contTiana);
    localStorage.setItem('mulan', contMulan);

    // Verificando o personagem com mais votos
    let maior = Math.max(contMerida, contMoana, contTiana, contMulan); // Encontrando o maior número de votos
    let pagina = ''; // Inicializando a variável de página

    if (contMerida === maior) {
        pagina = 'merida';
    } else if (contMoana === maior) {
        pagina = 'moana';
    } else if (contTiana === maior) {
        pagina = 'tiana';
    } else if (contMulan === maior) {
        pagina = 'mulan';
    }

    // Abertura de uma nova página após 3 segundos
    setTimeout(() => {
        window.open(pagina + 'Tela' + capitalizeFirstLetter(pagina) + '.html', '_blank'); // Corrigido para abrir a página certa
    }, 3000);
}