/*function klikni(a,b){
    console.log(a+b)
}

klikni(125,64)

const  klikni_me = (a,b)=>{
    console.log(a+b)

}
klikni_me(25,60)*/

let btns = document.querySelectorAll('button')

btns.forEach(function(btn){
    //Event listener koji ceka za klik za svako dugme
    btn.addEventListener("click",function(el){
        let clicked_btn = el.target
        console.log(clicked_btn.innerText)
    });
});

let link = document.querySelector('#link')

link.addEventListener("click", (event)=>{
    console.log(event.target)
})

let form = document.querySelector('form')

form.addEventListener("submit", (ev)=>{
//ne dozvoljava da se uradi ono sta zapravo neki listener govori da treba da radi
//u ovom slucaju nece uraditi submit
    ev.preventDefault()
})

let opcije = document.querySelector('select')
//event kada se bira neka opcija iz padajuce liste
opcije.addEventListener("change",(evene) =>{
    console.log(evene.target.value)
})

//listener kada se menja velicina prozora pretrazivaca
window.addEventListener("resize", () =>{
    if(window.innerWidth>1000){
        console.log('Prozor je vec od 1000')
    }else{
        console.log('Prozor manji od 1000')
    };
})

//detektovanje ulaznih elemenata sa tastature
let input= document.querySelector('input');

input.addEventListener("keydown",(events) =>{
    console.log(events.key)
})

//kreiranje kada se mis pomera preko celog prozora u pretrazivacu
window.addEventListener("mousemove",(events)=>{
    console.log('mis pomeren');
})
