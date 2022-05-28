const advice = document.getElementById('advice'); 
const adviceId = document.getElementById('advice-id');
const newAdviceBtn = document.getElementById('new-advice-btn'); 

async function generateAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice'); 
    const data = await res.json(); 
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice; 
}

newAdviceBtn.addEventListener('click', generateAdvice); 