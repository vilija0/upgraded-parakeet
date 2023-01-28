//hvatanje html elemenata sa stranice
function pokreniMe(dugme){
    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;

    let message =  document.querySelector('#kliknutoDugme')
    message.innerHTML = nazivDugmeta

}//11

function test(){

    let link2 = document.querySelector('.drugi-link')

    
    console.log(link2.nextSibling)
    console.log(link2);
}

function validacija(){
    let input = document.querySelector("#email").value
    //provera da li string koji smo uneli sadrzi @ i tacku
    if(input.includes('@') && input.includes('.')){
        let pozicijaAt = input.indexOf('@')//uzimamo poziciju @
        let pozicijaTacka = input.indexOf('.')//uzimamo poziciju tacke

        let izmedjuAtTacka = input.substring(pozicijaAt+1,pozicijaTacka)//uzima vrednost izmedju pozicija substring(ne ukljucuje poslednju poziciju)
        //da li izmedju tacke i @ imamo vise od 0 karaktera
        if(izmedjuAtTacka.length>0){
            let preAt = input.substring(0,pozicijaAt);
            //da li pre @ imamo vise od 2 karaktera
            if(preAt.length>2){
                let posleTacke = input.substring(pozicijaTacka+1,input.length)
                //da li posle tacke imamo vise od jednog karaktera
                if(posleTacke.length>1){
                    console.log('Email je validan')
                }else {
                    console.log('Mail nije validan1')
                }
            }else{
                console.log('Mail nije validan2')
            }
        }else{
            console.log('Mail nije validan3')
        }
    }else{
        console.log('Mail nije vaidan4')
    }
}
//54
