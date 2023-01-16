// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
const mousemove = document.querySelector(".mousemove1");
const mousemove2 = document.querySelector(".mousemove2")
const mousemove3 = document.querySelector(".mousemove3")
// e = event
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener('mousemove', (e)=>{
    mousemove2.style.left = e.pageX + "px";
    mousemove2.style.top = e.pageY + "px";

});
window.addEventListener('mousemove', (e)=>{
    mousemove3.style.left = e.pageX + "px";
    mousemove3.style.top = e.pageY + "px";

});
// optimisable avec queryselector all et for each