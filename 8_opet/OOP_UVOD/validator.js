class Validator{

    constructor(config){
        this.elementsConfig = config;
        //prazan objekata za greske
        this.errors={}
        this.generateErrorObject()
        //metoda za dobijanje povratne informacije
        this.inputListener();
    }

    generateErrorObject(){
        //prolazak kroz objekat koji smo kreirali u script. js
        for(let filed in this.elementsConfig){
            //za svako polje izbacuje gresku
            this.errors[filed]=[];//kreira prazan niz objekata u koji se upisuje redom ime_prezime,korisnicko_ime...
            //ovde se kreira isto kao i u script.js pogledati njegov console
        }
    }

    inputListener(){
        let inputSelector= this.elementsConfig;
        //uzima opet sve elemente koje se prosledjuju klasoi koje smo napravilui u script. js

        for(let filed in inputSelector)//lista redom niz elemenata koji se dobija inputSelect
        {
            let selector = `input[name="${filed}"]`;
            let el = document.querySelector(selector);//uzima inpute html sa imenom
            el.addEventListener('input', this.validate.bind(this))
            
        }
    }

    validate(e){

        let elFiles = this.elementsConfig;///sva polja

        //ovde se uzima vrednost tacno odredjenog elementa koji pisemo
        let field = e.target;//trenutno polje koje validiramo tj upisujemo
        console.log(field)

        let fieldName = field.getAttribute('name');//konkretno ime html taga koje trenutno upisujemo
        let fieldValue = field.value;//vrednost koja se upisuje u polje
        console.log(fieldValue)

        this.errors[fieldName]=[];
        console.log(elFiles[fieldName])

        if(elFiles[fieldName].required){
            if(fieldValue ===''){
                this.errors[fieldName].push('Polje je prazno')
            }
        }
        if(elFiles[fieldName].email){
            if(!this.validateEmail(fieldValue)){
                this.errors[fieldName].push('Neispravna email adresa');
            }
        }

        if(fieldValue.lenght < elFiles[fieldName].minlenght || fieldValue.lenght>elFiles[fieldName].maxlenght){
            this.errors[fieldName].push(`Polje mora imati minimalno ${elFiles[fieldName].minlenght} i maksimalno ${elFiles[fieldName].maxlenght}`)
        }

        if(elFiles[fieldName].matching){
            let matchingEl = document.querySelector(`input[name="${elFiles[fieldName].matching}"]`)
            if(fieldValue !== matchingEl.value){
                this.errors[fieldName].push('Lozinke se ne poklaaju')
            }
            if(this.errors[fieldName].lenght === 0){
                this.errors[fieldName]=[]
                this.errors[elFiles[fieldName].matching]=[]
            }
        }
        this.populateErrors(this.errors);
    }

    populateErrors(errors){
        for(const elem of document.querySelectorAll('ul')){
            elem.remove();
        }
        for(let key of Object.key(errors)){
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement('ul')
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error =>{
                let li=document.createElement('li');
                li.innerText=error;

                errorsElement.appendChild(li)
            })
        }
    }

    validateEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }else{
            return false
        }
    }
}

