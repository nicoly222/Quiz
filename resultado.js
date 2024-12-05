function resultadofinal(){
    let contMerida=0;
    let contMoana=0;
    let contTiana=0;
    let contMulan=0;

    let radios = document.querrySelectorAll('input[type="radio"]')
    console.log(radios)

    radios.array.forEach(e => {

        if(e.checked){
            if(e.value == "Merida"){
                contMerida++;
            }else if (e.velue == "Moana"){
                contMoana++;
            }else if(e.vaalue == "Tiana"){
                contTiana++;
            }else if(e.value == "Mulan"){
                contMulan++;
            }
        }
        
    })

    let resultado
}