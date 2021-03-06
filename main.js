const imageBox = document.querySelector('.img-group-box');

window.onload = showImgList(12);

function showImgList(numOfImages){
  for(let i=1; i<=numOfImages; i++){
    let newImg = document.createElement('img');
    newImg.src=`images/image${i}.jpeg`;
    imageBox.appendChild(newImg);
  }
}

const currentImg = document.getElementById('current');
const allImgs = document.querySelectorAll('.img-group-box img');
const opacity = 0.6;

// set the opacity of the first of the group 
allImgs[0].style.opacity = opacity;

allImgs.forEach(img => img.addEventListener('click', handleImgClick));

function handleImgClick(e){
  allImgs.forEach(img => img.style.opacity = 1 );
  currentImg.src = e.target.src;
  currentImg.classList.add('fade-in');
  setTimeout(()=> currentImg.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}

