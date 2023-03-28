const acordion = document.querySelectorAll('.acardion .acardion-card');
acordion.forEach(foo =>{
    foo.onclick = () => {
        acordion.forEach(removefoo => { removefoo.classList.remove('active') });
        foo.classList.toggle('active');
    }
})

function burgerMenu() {
    let menu = document.querySelector(".nav")
    menu.classList.toggle('active')
    if( menu.classList.contains("active")){
        document.getElementById('menuIcon').style.transform = 'rotate(90deg)';
        document.getElementById('menuIcon').style.transition = '1.3s';
    }else{
        document.getElementById('menuIcon').style.transform = 'rotate(0deg)'
        document.getElementById('menuIcon').style.transition = '1.3s';
    }
}