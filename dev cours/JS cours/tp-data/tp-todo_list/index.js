const form = document.querySelector('form');


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    item.value = "";
})

list.addEventListener('click', (e)=>{
    e.target.remove();
})