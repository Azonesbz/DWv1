import getCountry from "./addCountry.js"

const searchBtn = document.getElementById('btn-search')
const filterBtn = document.getElementById('btn-filter')
const menuFilter = document.getElementById('menu-filter')
const menuSearch = document.getElementById('menu-search')
const inputSearch = document.getElementById('input-search')



let count = 0
const country = getCountry()
for(let i = 0; i < country.length; i++){
    const h1 = document.createElement('h1')
    h1.classList.add('pays', 'py-1', 'pl-2', 'hover:bg-zinc-300');
    h1.value = country[count]
    menuSearch.appendChild(h1).innerText = country[count]
    count++
}
inputSearch.addEventListener('keyup', debounce(
    function search(e) {
        const value = e.target.value
        let x = document.getElementsByClassName('pays');
        for (let i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(value.toLowerCase())) {
                menuSearch.style.display ='block'
                x[i].style.display = 'none';
            }
            else {
                menuSearch.style.display = 'none'
                x[i].style.display="block";                 
            }
        }
    }, 350)
);
menuSearch.addEventListener('click', (e)=> {
    inputSearch.value = e.target.value
    menuSearch.style.display = 'none'
})

function debounce(callback, delay){
    let timer;
    return function(){
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}