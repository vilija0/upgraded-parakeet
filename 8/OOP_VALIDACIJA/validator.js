
class Validator{
    
    constructor(configg)//prima config iz script.js
    {
        console.log(configg)
        this.elementsConfig=configg;//niz od svih elemenata
        this.errors = {};//niz gde se smestaju greske

        this.generateErrorsObject();//funkcija 
        this.inputListener();//kada se napise nesto mora da se dobije povratna inf
    }

    generateErrorsObject(){
        for(let field in this.elementsConfig){
            //za svako polje pravimo da ima niz
            this.errors[field] = [];
        }
    }

    inputListener(){
        let inputSelector = this.elementsConfig;//ovde su upisani nazivi polja

        for(let field in inputSelector){
            let selector = `input[name="${field}"]`;
            let elm = document.querySelector(selector);
            elm.addEventListener('input',this.validate.bind(this))
        }
    }

    validate(e){
        let elFields = this.elementsConfig;

        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName]= [];

        if(elFields[fieldName].required){
            if(fieldValue ===''){
                this.errors[fieldName].push('Polje je prazno')
            }
        }
        if(elFields[fieldName].email){
            if(!this.validateEmail(fieldValue)){
                this.errors[fieldName].push('Neispravna email adresa')
            }
        }
        if(fieldValue.lenght<elFields[fieldName].minlenght || fieldValue.lenght>elFields[fieldName].maxlenght){
            this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minlenght} i maksimalno ${elFields[fieldName].maxlenght} karaktera`)
        }
        if(elFields[fieldName].matching){
            let matchingEl = document.querySelector(`input[name="${elFields[fieldName].matching}"]`)
            if(fieldValue !== matchingEl.value){
                this.errors[fieldName].push('Lozinke se ne poklapaju');
            }

            if(this.errors[fieldName].lenght ===0){
                this.errors[fieldName] = [];
                this.errors[elFields[fieldName].matching]=[];
            }
        }
        this.populateErrors(this.errors);
    }

    populateErrors(errors){
        for(const elem of document.querySelectorAll('ul')){
            elem.remove();
        }
        for (let key of Object.keys(errors)){
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement
            let errorsElement = document.createElement('ul');
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error =>{
                let li = document.createElement('li');
                li.innerText=error;

                errorsElement.appendChild(li);
            })
        }
    }

    validateEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }return false;
    }
}
