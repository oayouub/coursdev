// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const nav =  document.querySelector('nav');
const imgAppear = document.getElementById('imgImprovise') ;
const popUp = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
let playOnce = true;
window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY > 1){
        nav.style.height = "45px";
    }else{
        nav.style.height = "90px";
    };
    if(window.scrollY > 200){
        imgAppear.style.opacity = "100%";
        imgAppear.style.transform = "translateX(0)";
    };
    if(window.scrollY > 1272 && playOnce){
       popUp.style.opacity = "100%";
        popUp.style.transform = "translateX(0)";
        playOnce = false;
    };
    
});
closeBtn.addEventListener('click',(e)=>{
    popUp.style.opacity ="0%";
    popUp.style.transform = "translateX(400px)";
    
});