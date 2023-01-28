/*
console.log('1 test')

let b = document.querySelector('body')

b.innerHTML = "<p> Ovo je recenica</p>"

//asinhroni JS
setTimeout(function(){
    let t=document.querySelector('body p');
    t.style.color = 'blue'
}, 10000)

document.write("4. pisanje")
document.write("5. pisanje")
document.write("6. pisanje")
*/

/*
b.innerHTML = "<p> Ovo je recenica</p>"

document.write("pisanje")

let t =document.querySelector('body p')

t.style.color = 'red'*/


//ovo je starija metoda koja se vise ne koristi, dole ispod ide novija metoda koja se korist danas
/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(xhttp.responseText)
    }
}
xhttp.open('GET' ,'https://62cc850e8042b16aa7d0ae24.mockapi.io/Users',true)
xhttp.send();*/





document.querySelector('#fetchBtn').addEventListener('click', e =>{
    e.preventDefault();

    let id = document.querySelector('#userID').value

    console.log(id)

let request = fetch('https://62cc850e8042b16aa7d0ae24.mockapi.io/Users/'+ id)
.then(response => response.json()).then(data =>{
    console.log(data)

    let podaci = document.querySelector('#podaci')

    podaci.innerHTML = `<p><b> ${data[email]}</b></p>
                        <p><b>${data[username]}</b></p>
                        <p><b>${data[password]}</b></p>`;

}).catch(error=>{
    alert('Prekinuta veza')
})
})


















