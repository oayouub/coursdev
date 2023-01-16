//selecteurs document.querySelector('KJKL')
//document.querySelector("h4").style.background ="yellow";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');


questionContainer.addEventListener('click', () => {
     questionContainer.classList.toggle('question-click');
});

btn1.addEventListener('click', () => {
   response.classList.add("show-response");
   response.style.background = 'green';
});
btn2.addEventListener('click', () => {
    response.classList.add("show-response");
    response.style.background = 'red';
});

//prio css : div id class baliseHTML
//------------------------------------------------

//Mouse events
const mousemove = document.querySelector(".mousemove");
// e = event
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform ="scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform ="scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", ()=> {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
} )

questionContainer.addEventListener("mouseout", ()=> {
    questionContainer.style.background = "rgba(0,0,0,1)";
} )

response.addEventListener('mouseover', () => {
    response.style.transform ="rotate(2deg)";
})

//------------------------------------------------------

//keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
    const audio = new Audio();
    audio.src = "./2843.mp3";
    audio.play();
}

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if(e.key === "j"){
        keypressContainer.style.background = "pink";
    } else if (e.key === "h"){
        keypressContainer.style.background = "blue";
    }
    else{
        keypressContainer.style.background = "red";
    }

    ring();
});
//----------------------------------------------------

//Scroll event

const nav = document.querySelector("nav");

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);

    if(window.scrollY > 120){
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})
//-------------------------------------------------

//Form event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e)=> {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // pas de refrech en validant
    
    if (cgv.checked) {//guillemet de la touche 7 pour concatener
        document.querySelector('form > div').innerHTML = ` 
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>`;
    } else{
        alert('Veuillez accepter les CGV');
    } 
});
//--------------------------------------------------------

//Load event
window.addEventListener("load", () => {
    console.log("document chargé");
})

//-----------------------------------------------------------

//ForEach
const boxes = document.querySelectorAll('.box'); //plusieurs elements ayant cette class

boxes.forEach((box) => {
    box.addEventListener('click', (e)=>{
        box.style.transform = "scale(0.7)";
    })
});
//------------------------------------------------------------

//addEvenListener Vs oneclick
// document.body.onclick = () => {
//     console.log("Click !");
// };

//Bubbling => de base l'eventListener est paramétré en mode bubbling
document.body.addEventListener('click', ()=>{
    console.log("click 1");
});

//Usecapture (appronfondir)
document.body.addEventListener('click', ()=>{
    console.log("click 2");
}, true);

//--------------------------------------------------------------------

//Stop propagation
questionContainer.addEventListener('click', (e)=>{
    alert('test !');
    e.stopPropagation();
});

//removeEventListener

//--------------------------------------------------------------------

// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open('http://google.com', "cours js", "height=600, width=800"); //ouvrir une fenetre
//window.close = fermer la fenetre

// window.alert('Hello');

//confirm
btn2.addEventListener('click', ()=>{
    confirm('Voulez vous vraiment vous tromper ?');
});

//prompt
let answer;

btn1.addEventListener('click', ()=>{
    answer = prompt('Entrez votre nom !');

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(()=>{
    questionContainer.style.borderRadius = "300px";
}, 2000); //2000 = 2sec

// let interval = setInterval(()=>{
//     document.body.innerHTML +=
//     "<div class= 'box'><h2>Nouvelle Boite</h2></div>"
// }, 1000);

document.body.addEventListener('click',(e)=>{
    // e.target.remove();
    clearInterval(interval);
});

//location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace('http://lequipe.fr');  rediriger vers une autre page

// window.onload = ()=>{
//     location.href = "http://twitter.fr";
// }

//Navigator
// console.log(navigator.userAgent);

//History
// console.log(history);
// window.history.back();
// history.go(-8);

//----------------------------------------------------------------------

//SetProperty
window.addEventListener('mousemove',(e)=>{
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});


























































































