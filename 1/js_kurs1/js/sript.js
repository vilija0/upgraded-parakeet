/*console.warn('Greska')

//window.open()//new tab

document.write('Podrav sa stranice')

document.getElementById('poruka').innerText = 'Pozdrav opet'

//Ovo je kod koji ce u konzoli ispisati test
console.log('test')

//varijable

let cys;

cys = 'Bas je dobar dan danas'

console.log(cys);

let godine = 5;
let mesec = 3;
let rezultat = godine + mesec;
let brjedan= 65;
let brdva= '5';
brdva= parseInt(brdva)//pretvaranje stringa u broj

let ime = 'Marko'
let prezime = 'Sigurnost'
let godinee = 18;

let recenica = `Ja sam ${ime} imam ${godinee} godina`;
console.log(recenica)

let automobili = ['Audi','BMW','Porche','Mercedes']
automobili.forEach(function(automobil){
    console.log(automobil);
});
//1:54

*/
/*
let nekretnine = {
    stan: 70000,
    kuca: 150000,
    plac: 30000
}

function racunanje_mesecne_rate(godine,vrsta_nekretnine) {

    let meseci = godine*12;
    let rata = nekretnine[vrsta_nekretnine]/meseci;
    rata = rata.toFixed(2);


    console.log('Mesecna rata za ' + vrsta_nekretnine + ' iznosi ' + rata + 'na' + godine + 'godina')

}
racunanje_mesecne_rate(15,'kuca')



/*
let godine = 10;
let meseci = godine * 12;
let rata = nekretnine.stan/meseci;

rata = rata.toFixed(2);
console.log(meseci + 'meseci');
console.log(rata + 'eura');
console.log('Mesecna rata za stan iznosi ' + rata + 'na' + godine + 'godina')

*/
/*
let brend = document.getElementsByTagName('span');


for(let auto of brend){
    console.log(auto.innerText);
}

let modeli = document.getElementsByClassName('automobil-model');

for(let model of modeli){
    console.log(model.innerText);
}

//kada su id onda se nikada ne pravi niz vec uvek
//ima samo jedan element na citavoj stranici
//sa istim id -em

let najbolji = document.getElementById('recenica');

console.log(najbolji.innerText)


brend = document.querySelectorAll('span');
for(let auto of brend){
    console.log(auto.innerText);
}

modeli = document.querySelectorAll('.automobil-model');
for(let model of modeli){
    console.log(model.innerText);
}

//brosanje recenica preko js

let recenica = document.querySelector('#recenica')

recenica.remove();

//pravljenje novog elementa na stranici

let novi_el = document.createElement('div')
novi_el.classList = 'novi-element';//Dodajemo klasu 
novi_el.innerHTML='<hr>Pozdrav'//dodajemo hr i tekst


let body = document.querySelector('body');//selektujemo body i tag

body.appendChild(novi_el)//na kraju body taga dodajemo novi element


//2:47*/

let brend = document.getElementsByTagName('span');

for(let auto of brend){
    console.log(auto.innerText)
}

console.log('--------------')

let modeli = document.getElementsByClassName('automobil-model')
for(let model of modeli){
    console.log(model.innerText)
}

console.log('--------------')

let najbolji = document.getElementById('recenica')

console.log(najbolji.innerText)

console.log('--------------')

brend = document.querySelectorAll('span')

for(let auto of brend){
    console.log(auto.innerText)
}

let modelii = document.querySelectorAll('.automobil-model')


for(let model of modelii){
    console.log(model.innerText)
}

let recenicaa = document.querySelector('#recenica')
console.log(recenicaa.innerText)

let recenicaaa = document.querySelector('#recenica')

recenicaa.remove();

//kreiranje novog elementa,dodavanje u body
let novel = document.createElement('div')
novel.classList = 'novi-element'
novel.innerHTML ='<hr>Pozdrav'

let body = document.querySelector('body')

body.appendChild(novel)

