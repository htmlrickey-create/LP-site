const openCard1 = document.getElementById('openCard1');
const card1 = document.getElementById('card1');

openCard1.addEventListener('click', () => {
    if(card1.style.display === "block"){
        card1.style.display = "none";
        openCard1.textContent = "もっとみる ";
    }else{
        card1.style.display = "block";
        openCard1.textContent = "閉じる";
    }
});

const openCard2 = document.getElementById('openCard2');
const card2 = document.getElementById('card2');
openCard2.addEventListener('click', () => {
    if(card2.style.display === "block"){
        card2.style.display = "none";
        openCard2.textContent = "もっとみる";
    }else{
        card2.style.display = "block";
        openCard2.textContent = "閉じる";
    }
});
