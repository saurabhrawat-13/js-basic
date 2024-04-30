const buttons = document.querySelectorAll('.btn');
const body = document.querySelector("body")


buttons.forEach(function(btn){
     console.log(btn);
     btn.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if (e.target.id === 'white' ) {
        body.style.backgroundColor = e.target.id;    
     }
     if (e.target.id === 'orange' ) {
        body.style.backgroundColor = e.target.id;    
     }
     if (e.target.id === 'aqua' ) {
        body.style.backgroundColor = e.target.id;    
     }
     if (e.target.id === 'violet' ) {
        body.style.backgroundColor = e.target.id;    
     }
     if (e.target.id === 'grey' ) {
        body.style.backgroundColor = e.target.id;    
     }
 });
});