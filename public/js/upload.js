const changeProfilBtn = document.getElementById('change-profil')
const profil = document.getElementById('profil')
const editProfil = document.getElementById('profil-edit')

changeProfilBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    profil.style.display = 'none'
    editProfil.style.display = 'block'

})