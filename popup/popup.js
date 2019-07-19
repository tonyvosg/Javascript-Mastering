const button = document.querySelector('button');
const wrapper = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
button.addEventListener('click', () => {
    console.log("hey");
    wrapper.style.display = "block";
});
close.addEventListener('click', ()=>{
    wrapper.style.display = "none"; 
});
