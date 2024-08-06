let qItems = document.querySelectorAll('.question')
let accordions = document.querySelectorAll('.accordion-item')

qItems.forEach((qItem, i) => qItem.addEventListener('click', ()=> {
    accordions[i].ariaHidden = accordions[i].ariaHidden === 'true'? 'false':'true';  
}));