let textTag = document.querySelector('.section1 h1')
let text = textTag.textContent

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++){
    if(splittedText[i]===" "){
        splittedText[i]="&nbsp"
    }
    textTag.innerHTML +=`<span> ${splittedText[i]}</span>`
}

let spans = textTag.querySelectorAll('span')
let k = 0;
let interval = setInterval(()=>{
    let singleSpan = spans[k]

    singleSpan.className = 'fadeMove'
    k++

    if(k === spans.length)
    {
        clearInterval(interval)
    }
},100);

let border = document.querySelector('.border-line')
let animationWidth = 0

window.onscroll = () =>{

    if(this.oldScroll > this.scrollY){
        animationWidth -= 1
    }else{
        animationWidth += 1;
    }

    if(animationWidth >= 100){
        animationWidth = 100;
    }else if(animationWidth <= 0){
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%'
    
    this.oldScroll =this.scrollY


}
const imageAnimation = () =>{
    //racunanje ond vrha stranice do same sekcije sa slikama

    let sectionforanimation = document.querySelector('.section2 .images')
    let sectionPosition = sectionforanimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 1.3;

    let imagesLeft = document.querySelector('.slideFromLeft') 
    let imagesRight = document.querySelector('.slideFromRight')

    if(sectionPosition<screenPosition){
        imagesLeft.classList.add('animated')
        imagesRight.classList.add('animated')
    }
}