// navbar start
const mainNav = document.querySelector('.headerLink');
const togBtn = document.querySelector('.nav-tog');
const navLinks = document.querySelector('.navLinks');
const closeNav = document.querySelector('.navCloseBtn2');

togBtn.addEventListener('click',() =>{
    if(mainNav.classList.contains('activeNav')){
        mainNav.classList.remove('activeNav');
    }else{
        mainNav.classList.add('activeNav');
    }
});
closeNav.addEventListener('click',() =>{
    if(mainNav.classList.contains('activeNav')){
        mainNav.classList.remove('activeNav');
    }else{
        mainNav.classList.remove('activeNav');
    }
});
mainNav.addEventListener('click',() =>{
    if(mainNav.classList.contains('activeNav')){
        mainNav.classList.remove('activeNav');
    }else{
        mainNav.classList.remove('activeNav');
    }
});
// navbar end

// copyright time setup
const copyRightTime = document.querySelector('.copyRightTime');
const setCopyrightTime = () =>{
    const date = new Date();
    const year = date.getFullYear();

    copyRightTime.textContent = year;
}
setCopyrightTime();
// try
const productPageImg = document.querySelectorAll('.productPageImg')
const productPageImg2 = document.querySelectorAll('.productPageImg2')
const productPageImg3 = document.querySelectorAll('.productPageImg3')

productPageImg.forEach((img) =>{
    img.addEventListener('click',()=>{
        img.requestFullscreen();
    })
})
productPageImg2.forEach((img) =>{
    img.addEventListener('click',()=>{
        img.requestFullscreen();
    })
})
productPageImg3.forEach((img) =>{
    img.addEventListener('click',()=>{
        img.requestFullscreen();
    })
})
document.addEventListener('click',()=>{
    document.exitFullscreen();
})
