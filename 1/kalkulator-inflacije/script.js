
function inflationCalculator(){

    let inflacija = parseFloat(document.getElementById('inflationRate').value)
    let novac = parseFloat(document.getElementById('money').value)
    let godine = parseFloat(document.querySelector('#years').value)

    let vrednost = novac + (novac * (inflacija/100))
    for(let i = 1;i<godine;i++){
        vrednost += vrednost * (inflacija/100)
    }
    console.log(vrednost)
    vrednost=vrednost.toFixed(2);
    
    let newElement = document.createElement('div')//kreira se div element uz pomoc js
    newElement.className = 'new-value'//ime klase elementa
    newElement.innerText = 'Danjasnjih ' + novac + '€ vredi isto kao i ' + vrednost + '€ za ' + godine +' godina.';
    document.querySelector('.container').appendChild(newElement);
    //na kraju smo samo dodali element na kraj kontejnera
    
}