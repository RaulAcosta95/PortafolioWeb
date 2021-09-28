const project_title1 = document.querySelector('#project-title1');
const project_title2 = document.querySelector('#project-title2');          
const project_title3 = document.querySelector('#project-title3');         
const project_title4 = document.querySelector('#project-title4');          
const project_title5 = document.querySelector('#project-title5');          
const project_title6 = document.querySelector('#project-title6');         
const project_title7 = document.querySelector('#project-title7');      
const project_title8 = document.querySelector('#project-title8');
const everyPixel = document.querySelector('#everyPixelMexico');


animarSección(project_title1);
animarSección(project_title2);
animarSección(project_title3);
animarSección(project_title4);
animarSección(project_title5);
animarSección(project_title6);
animarSección(project_title7);
animarSección(project_title8);
animarSección(everyPixel);

function animarSección(seccionAAnimar){
    const options={
        threshold:0.20
    }
    const miObserver = new IntersectionObserver(funcionCallBack, options);
    function funcionCallBack(objeto) {
        if(objeto[0].isIntersecting){
            gsap.fromTo(seccionAAnimar, {x:-100, opacity:0}, {x:0,opacity:1,duration: 0.2});
        } else {
            gsap.fromTo(seccionAAnimar, {x:0, opacity:1}, {x:-100,opacity:0,duration: 0.2});
        }
        
    }
    miObserver.observe(seccionAAnimar);
}
