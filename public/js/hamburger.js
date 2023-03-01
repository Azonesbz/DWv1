const menuBtn = document.getElementById('menu-toggle')
const isMenu = document.getElementById('menu')

isMenu.classList.add('left-full')
menuBtn.addEventListener('click', () => {
    toggleBtn()
})

function toggleMenu(hidden){
    if(hidden){
        isMenu.classList.remove('left-full')
    } else {
        isMenu.classList.add('left-full')
    }
}

function toggleBtn()
{
    toggleMenu(isHidden())
}
    

function isHidden()
{
    return isMenu.classList.contains('left-full')
}