////zvezdice ne radi bas najbolje
/*
const starsWrapper = document.querySelector(".star")
const stars = document.querySelectorAll(".star a")

stars.forEach((star,clikedidx)=>{
    star.addEventListener("click",()=>{
        starsWrapper.classList.add("disabled")
        stars.forEach((otherStar,otheridx)=>{
            if(otheridx<=clikedidx){
                otherStar.classList.add("active")
            }
        })
    })
})*/

let allTotal=0;
function addToCart(element){
    let main= element.closest('.single-item')
    console.log(main)
    let price=main.querySelector('.price').innerText;
    console.log(price)
    let name = main.querySelector('h3').innerText;
    console.log(name)
    let cartItems=document.querySelector('.cart-items')

    price=price.substring(1)
    price=parseInt(price)
    allTotal += price

    cartItems.innerHTML += `<div class="cart-single-item">
                            <h3>${name}</h3>
                            <p>Cena za ovaj film: <span>$${price}</span></p>
                            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                            </div>`
    document.querySelector('.total').innerText = `Total: $${allTotal}`
    element.innerText = 'Dodato'
    element.setAttribute('disabled', 'true')
}

function removeFromCart(element){
    let main= element.closest('.cart-single-item')
    let name = main.querySelector('h3').innerText
    let cena = main.querySelector('span').innerText
    let movies = document.querySelectorAll('.single-item')

    console.log(main)
    console.log(name)
    console.log(cena)

    cena=cena.substring(1)
    cena=parseInt(cena)
    allTotal -= cena
    document.querySelector('.total').innerText = `Total: $${allTotal}`

    main.remove()

    console.log(movies)

    movies.forEach(function(movi){
        let movie = movi.querySelector('.si-content h3').innerText
        console.log(movie)

        if(movie == name){
            movi.querySelector('.actions button').removeAttribute('disabled')
            movi.querySelector('.actions button').innerText = "Dodaj"
        }
    })
}