
function openAba(id){
    let body = document.getElementsByTagName('body')
    const pag = document.getElementById(id)
    console.log(pag)

    window.scrollTo({top:0, behavior:"instant"})
    document.body.style.overflow = 'hidden'
    pag.style.display = 'flex'
}

function fechar(id){
    let pag = document.getElementById(id)

    pag.style.display = 'none'
    document.body.style.overflowY = 'scroll'
}