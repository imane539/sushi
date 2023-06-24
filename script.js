let mobileHide=document.querySelector('.mobile-hide')
let ul=document.querySelector('ul');
mobileHide.onclick=function(){
    mobileHide.classList.toggle('active');
    ul.classList.toggle('active');
}
let links=document.querySelectorAll('ul li');
function scrollToSomewhere(elements){
    elements.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            mobileHide.classList.toggle('active');
    ul.classList.toggle('active');   
            e.preventDefault();
            document.querySelector(e.target.dataset.title).scrollIntoView({
                behavior:'smooth'
            })
        })
 })
   
 
}
scrollToSomewhere(links);
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.heading', { origin:'top' });
 ScrollReveal().reveal('.popular-box', { origin:'bottom' });
 ScrollReveal().reveal('.introduction-text', { origin:'left' });
 ScrollReveal().reveal('.introduction-img', { origin:'right' });
