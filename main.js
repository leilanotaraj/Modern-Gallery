const current =document.querySelector('#current');
const images=document.querySelectorAll('.images img');
const opacity=0.4;
images[0].style.opacity=opacity

images.forEach(img=>img.addEventListener('click', imgClick));
function imgClick(e){
    images.forEach(img=>(img.style.opacity=1));
    
    current.src=e.target.src;
    setTimeout(() => {current.classList.remove('fade-in');
        
    }, 500); 
    current.classList.add('fade-in');
    e.target.style.opacity=opacity;
}