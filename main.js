const mealPrepButton = document.getElementById("meal-prep");
const prepModalContent = document.getElementById("prepModalContent");

const cateringButton = document.getElementById('cateringButton')


const modal = document.getElementById("myModal");

function mealPrepFunction() {
    console.log("works");
    modal.style.display = "flex";
    prepModalContent.innerHTML = `
        <h1 id='mpModalheader'>Meal Prep Options</h1>
        <hr>    
        <hr>
        <div id='mpList'>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        <div>
        <p id='finePrint'>cost of protein may vary</p>
    `;
}



cateringButton.addEventListener('click', ()=>{
    console.log('click')
    modal.style.display = "flex";
    prepModalContent.innerHTML = `
        <h1 id='mpModalheader'>Catering Options</h1>
        <hr>    
        <hr>
        <div id='cateringList'>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        <div>
        <p id='finePrint'>cost of protein may vary</p>
    `;
})
mealPrepButton.addEventListener("click", mealPrepFunction);







// CLOSES MODAL
document.querySelector(".close").addEventListener("click", () => {
    console.log("close");
    modal.style.display = "none";
});


function closeModal(){
    modal.style.display = "none";
    
}

modal.addEventListener('click', closeModal)