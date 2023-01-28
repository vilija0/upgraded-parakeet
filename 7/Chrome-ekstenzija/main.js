let logo=document.querySelector('.lnXdpd')
if(logo==null){
    let logo2=document.querySelector('#logo').children

    for (let i = 0; i < logo2.length; i++) {
        console.log(logo2[i])
        logo2[i].src=chrome.runtime.getURL('images/logo.png')
    }
}else{
    logo.src=chrome.runtime.getURL('images/logo.png')
    logo.srcset=chrome.runtime.getURL('images/logo.png')
}


