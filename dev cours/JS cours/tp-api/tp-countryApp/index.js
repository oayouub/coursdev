

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
let countryData = [];
let sortMethod = "maxToMin";
const card = document.querySelector('.countries-container');
const btnSort = document.querySelectorAll('.btnSort');
const input = document.querySelector('input');

async function countryF(){
await fetch(`https://restcountries.com/v3.1/all`)
.then((res) => res.json())
.then((data) => countryData = data);
console.log(countryData);
displayCountry();
};

function displayCountry(){
    card.innerHTML = countryData
    .filter((country)=> country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))
    .sort((a, b)=>{
        if(sortMethod ==="maxToMin"){
        return b.population - a.population
        } else if (sortMethod === "minToMax"){
           return a.population - b.population
        } else if(sortMethod === "alpha"){
            return a.translations.fra.common.localeCompare(b.translations.fra.common)
        }
    })
    .slice(0, inputRange.value)
.map(
    (country) =>`
    <div class ="card">
    <h2>${country.translations.fra.common}</h2>
    <h3>${country.capital}</h3>
    <img src=${country.flags.png}>
    <p>Popultaion : ${country.population}</p>
    
    
    </div> 
    `
    
)
};

input.addEventListener("input", (e) => {
    countryF(e.target.value);
    console.log(countryF(e.target.value));
  });

window.addEventListener('load',countryF);
inputSearch.addEventListener('input',displayCountry);

inputRange.addEventListener('input',()=>{
    displayCountry();
    rangeValue.textContent = inputRange.value;
});

btnSort.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        sortMethod = e.target.id;
        displayCountry();
    })
})