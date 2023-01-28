const mobileMenu = () =>{
    let menu = document.querySelector('.header ul')
    let btn = document.querySelector('.header button')
    
    if(btn.innerText ==='MENU'){
        menu.style.display = 'block'
        btn.innerText = 'CLOSE'
    }else{
        menu.style.display = 'none'
        btn.innerText = 'MENU'
    }
}

let leftbtn = document.querySelector('#left-btn')
let rightbtn = document.querySelector('#right-btn')
let pictures = document.querySelectorAll('.slider-images img')

let imgNum = 0;

rightbtn.addEventListener('click',()=>{
    dispalyNone()
    imgNum++
    if(imgNum === pictures.length){
        imgNum=0
    }

    pictures[imgNum].style.display='block'
})

leftbtn.addEventListener('click',()=>{
    dispalyNone();
    imgNum--;
    if(imgNum === -1){
        imgNum=pictures.length-1
    }
    pictures[imgNum].style.display='block'
})

const dispalyNone = () =>{
    pictures.forEach((img)=>{
        img.style.display='none';
    })
}
//portfolio element
const portfolioSort = (button) =>{
    let category = button.getAttribute('data-category')
    let portfolioItems = document.querySelectorAll('.portfolio-single-item')    

    portfolioItems.forEach((item)=>{
        item.style.display = 'none'
    })
    if(category === 'sve'){
        portfolioItems.forEach((item)=>{
            item.style.display = 'block'
        })
    }
    portfolioItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block'
        }
    })
}

//open modal dugme, otvaranje modala

const openModal = () =>{
    let modal = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    modal.style.display = 'block'
    overlay.style.dispaly = 'block'
}

const closeModal= ()=>{
    let modal = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    modal.style.display = 'none'
    overlay.style.dispaly = 'none'
}

