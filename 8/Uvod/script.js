/*
//prvi nacin pisanja objekta

const Osoba={
    first_name:'Niko',
    last_name:'Nikolic',
    phone:'0627894561',
    getNameAndPhone: function(){
        console.log(`${this.first_name} - ${this.phone}`)
    }
}

Osoba.getNameAndPhone();

*/

/*
//drugi nacin pisanja objekta

function Osoba(first_name,last_name,phone){
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;

    this.getNameAndPhone = function (){
        console.log(`${first_name} - ${phone}`)
    }
}

let osoba1 = new Osoba('Niko','Nikolic','06235782');
let osoba2 = new Osoba('Ivan','Ivanovic','062225782');

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();

*/

/*
const Osoba = {
    first_name:'Niko',
    getNameAndPhone: function(){
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

let niko = Object.create(Osoba);
niko.phone = '06156465';
niko.getNameAndPhone();

//dodeljivanje telefona osobi ovo ovde bas i nije prakticno

Osoba.phone='0622184645';
Osoba.getNameAndPhone();

//dodavanje nove osobe
let ivan = Object.create(Osoba);
ivan.phone = '20252535';
ivan.first_name = 'Ivan';

ivan.getNameAndPhone();
*/

//sada kreiramo klasu kako ce se ona kreirati i na dalje

class Osoba{
    constructor(first_name,last_name,phone){
        this.first_name= first_name;
        this.last_name = last_name;
        this.phone = phone;
    }
    getNameAndPhone(){
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

let osoba1 = new Osoba('Niko','Nikolic','25255');
let osoba2 = new Osoba('Ivan','Ivanovic','2552584');

console.log(osoba1.phone);
console.log(osoba2.first_name);

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();