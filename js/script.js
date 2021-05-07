// let input = document.getElementById('write').value;


// document.getElementById('cta1').onclick=get();
let input
window.addEventListener('scroll',get);
function get(){
    input = document.getElementById('write').value;
    
    console.log("input is", input);
    document.getElementById('specifics').innerHTML=input;
}