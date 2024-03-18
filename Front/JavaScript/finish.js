async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function timer(time) {
    let anchor = document.querySelector('[name="redirecionar"]');
    while (time > 0) {
      await delay(1000);
      anchor.textContent = "Você será redirecionado em " + time + " segundos...";
      time--;
    }
    // Redirecionar após o contador 
    window.location.href = "home.html"; 
}
  
window.addEventListener("load", (event) => {
    timer(5);
});