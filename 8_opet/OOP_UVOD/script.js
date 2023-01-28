let config = {
    'ime_prezime':{
        required:true,
        minlenght:3,
        maxlenght:50
    },
    'korisnicko_ime':{
        required:true,
        minlenght:5,
        maxlenght:50
    },
    'email':{
        required:true,
        email:true,
        minlenght:5,
        maxlenght:50
    },
    'broj_telefona':{
        minlenght:9,
        maxlenght:13
    },
    'lozinka':{
        required:true,
        minlenght:7,
        maxlenght:25,
        matching:'ponovi_lozinku'
    },
    'ponovi_lozinku':{
        required:true,
        minlenght:7,
        maxlenght:25,
        matching:'lozinka'
    }
}

let validator = new Validator(config)