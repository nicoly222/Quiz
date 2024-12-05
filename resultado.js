function resultadofinal(){
    let contMerida=0;
    let contMoana=0;
    let contTiana=0;
    let contMulan=0;

    let radios = document.querySelectorAll('input[type="radio"]')
    console.log(radios)

    radios.forEach(e => {

        if(e.checked){
            if(e.value == "Merida"){
                contMerida++;
            }else if (e.value == "Moana"){
                contMoana++;
            }else if(e.value == "Tiana"){
                contTiana++;
            }else if(e.value == "Mulan"){
                contMulan++;
            }
        }
        
    })

    let resultado = `Merida = ${contMerida}<br>
    Moana = ${contMoana}<br> Tiana = ${contTiana}<br> Mulan = ${contMulan}`;

    document.getElementById("resultado").innerHTML = resultado;

    localStorage.setItem('merida', contMerida)
    localStorage.setItem('moana', contMoana)
    localStorage.setItem('tiana', contTiana)
    localStorage.setItem('mulan', contMulan)

    let maior = 0 
    let pagina
    
    if(contMerida > maior){
        pagina = 'merida'
    }
    if(contMoana > maior){
        pagina = 'moana'
    }
    if(contTiana > maior){
        pagina = 'tiana'
    }
    if(contMulan> maior){
        pagina = 'mulan'
    }

    setTimeout(() => {
        window.open( 'TelaMerida.html')
    }, 5000);

    setTimeout(() => {
        window.open( 'TelaMoana.html')
    }, 5000);

    setTimeout(() => {
        window.open( 'TelaTiana.html')
    }, 5000);

    setTimeout(() => {
        window.open( 'TelaMulan.html')
    }, 5000);
}