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

const acordionCards = document.querySelectorAll('.acardion .acardion-card');
acordionCards.forEach(card => {
  card.addEventListener('click', () => {
    acordionCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('active');
      }
    });
    card.classList.toggle('active');
  });
});



// accordion menu box-shadow function

document.querySelectorAll('.acardion-card').forEach(card => {
    card.addEventListener('mouseover', () => card.style.boxShadow = 'inset 0 0 10px #388E3C');
    card.addEventListener('mouseout', () => card.style.boxShadow = 'none');
  });
  


//  svg color change function 

document.querySelectorAll('.farmvest-works-list').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.querySelectorAll('svg').forEach(svgElement => {
      svgElement.style.fill = '#B71C1C';
      svgElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
    });
  });
  card.addEventListener('mouseout', () => {
    card.querySelectorAll('svg').forEach(svgElement => {
      svgElement.style.fill = '';
      svgElement.style.boxShadow = '';
    });
  });
});
