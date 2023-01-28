window.addEventListener("keydown",(events)=>{
    let code = events.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`)
    console.log(keyElement)
    
    if(!keyElement){
        return
    }

    let audio = document.querySelector(`audio[data-key="${code}"]`)
    audio.currentTime = 0;
    audio.play();

    switch(code){
        case 69:
        case 82:
            animateCrashRide();
            break;
        case 75:
            animateHiHatcLOSED();
            break;
    }
})

let crashRide = document.querySelector('#chash-ride')
let hiHatTop = document.querySelector('#hihat-top')

const animateCrashRide = () =>{
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}
const animateHiHatcLOSED = () =>{
    hiHatTop.style.top = '171px'
}

const removeCrashRideTransition = e =>{
    if(e.propertyName !== 'transform')return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)'
}
const removeCRT = e =>{
    if(e.propertyName !== 'top')return

    e.target.classList.remove('playing')
}