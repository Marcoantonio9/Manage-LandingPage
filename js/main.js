let menu = document.querySelector('.menu')
let btnOpen = document.querySelector('.btnMenu_open')
let btnClose = document.querySelector('.btnMenu_close')

btnOpen.addEventListener('click', () => {
    menu.classList.add('menu_open')
    //document.querySelector('.btnMenu_open').style.display = 'none'
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('menu_open')
    //document.querySelector('.btnMenu_open').style.display = 'block'
})

let btnGo = document.querySelector('#btnGo')
    btnGo.addEventListener('click', () => {

        let email = document.querySelector('#campo-email').value
        let validar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if(!validar.exec(email)){
            alert('Digite o e-mail corretamente!')
            return false
        }else{
            alert(`E-mail: ${email} cadastrado com sucesso!`)
            window.location.reload()
        }


})
