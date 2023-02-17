function backHome(){
    const back = document.querySelector('.back')

    back.addEventListener('click', () => {
        window.location.replace("../../index.html")
    })
}

backHome()