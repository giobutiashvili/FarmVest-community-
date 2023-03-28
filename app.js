//   burger menu function
function burgerMenu() {
    document.querySelector('.nav').classList.toggle('active');
    document.getElementById('menuIcon').style.transform =
      document.querySelector('.nav').classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
    document.getElementById('menuIcon').style.transition = '1.3s';
  }
  

//  shop list mouse hover function 

document.querySelectorAll('.shop-list a').forEach(item => {
    item.addEventListener('onmouseover', () => item.style.width = '300px');
    item.addEventListener('onmouseout', () => item.style.width = 'auto');
});
 

// accordion menu function

const acordion = document.querySelectorAll('.acardion .acardion-card');
acordion.forEach(foo =>{
    foo.onclick = () => {
        acordion.forEach(removefoo => { removefoo.classList.remove('active') });
        foo.classList.toggle('active');
    }
})

// accordion menu box-shadow function

document.querySelectorAll('.acardion-card').forEach(card => {
    card.addEventListener('mouseover', () => card.style.boxShadow = 'inset 0 0 10px #388E3C');
    card.addEventListener('mouseout', () => card.style.boxShadow = 'none');
  });
  



const svgElement = document.querySelector('#my-svg');

svgElement.addEventListener('mouseenter', () => {
svgElement.setAttribute('fill', 'red');
});

svgElement.addEventListener('mouseleave', () => {
svgElement.removeAttribute('fill');
});

