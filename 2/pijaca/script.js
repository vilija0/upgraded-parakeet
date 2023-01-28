let allTotal=0;
function addToCart(element){
    console.log(element)
    let mainEl = element.closest('.single-item')
    console.log(mainEl)
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let kolicina = parseInt(mainEl.querySelector('input').value)
    let cartItems = document.querySelector('.cart-items')


    if(kolicina >0){
        
        price = price.substring(1)//koliko elemenata se brise iz strinka na kojim pozicijama
        price = parseInt(price)
        let total = price * kolicina;
        allTotal += total
        cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p> $${price} X ${kolicina} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;
        document.querySelector('.total').innerText = `Total: $${allTotal}`
        element.innerText = 'Dodato'
        element.setAttribute('disabled', 'true')

    }else{
        alert('Odaberi kolicinu');
    }
}

function removeFromCart(ukloni){
    let mainEl = ukloni.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item')
    price = parseInt(price)
    allTotal -= price;
    
    document.querySelector('.total').innerText = `Total: $${allTotal}`

    mainEl.remove();

    console.log(vegetables)

    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        
        if(itemName === name){
            vege.querySelector('.actions input').value = 0
            vege.querySelector('.actions button').removeAttribute('disabled')
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
    });
}