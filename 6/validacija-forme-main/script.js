let inputs = document.querySelectorAll('input')
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka":[],
    "ponovi_lozinku":[]
}


inputs.forEach((element)=>{
    element.addEventListener('change', (e)=>{
        let currentInput = e.target;
        let inputValue = currentInput.value//uzimanje vrednosti
        let inputName = currentInput.getAttribute('name')//uzimanje input name iz html taga
        
        if(inputValue.length>4){
            errors[inputName]= []

            switch(inputName){
                case 'ime_prezime':
                    let validation = inputValue.trim()
                     validation = validation.split(" ");
                    if(validation.length<2){
                        errors[inputName].push('Moras napisati i ime i prezime')
                    }
                break;
                case 'email':
                    if(!valiadteEmail(inputValue)){
                        errors[inputName].push('Neispravna email adresa')
                    }
                break;
                case 'ponovi_lozinku':
                    let lozinka = document.querySelector('input[name="lozinka"]').value
                    if(inputValue !== lozinka){
                        errors[inputName].push('Lozinke se ne poklapaju')
                    }
                }
        }else{
            errors[inputName] = ['Polje ne moze imati manje od pet karaktera']
        }
        populateErrors()
    })
});

const populateErrors = ()=>{


    for(let elem of document.querySelectorAll('ul')){
        elem.remove()
    }

    for(let key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"]`)
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul')
        parentElement.appendChild(errorsElement)

        errors[key].forEach(errors=>{
            let li = document.createElement('li')
            li.innerHTML = errors

            errorsElement.appendChild(li)
        })
    }
}

const valiadteEmail = email =>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }else{
        return false
    }
}