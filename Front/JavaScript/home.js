document.querySelector('[name="new"]').addEventListener('click',function(event) {
    if(localStorage.getItem("sorteio")){
        localStorage.removeItem("sorteio");
    }
});