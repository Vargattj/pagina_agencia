const imgCel = document.querySelector('.phone-image');
const  divCel = document.querySelector('.click-phone');

imgCel.addEventListener('click',() =>{
  if(divCel.style.display === 'none'){
    divCel.style.display = 'flex'
  }else if(divCel.style.display = 'flex'){
    divCel.style.display = 'none';
  }

})