const mealPrepButton = document.getElementById("meal-prep");
const prepModalContent = document.getElementById("prepModalContent");

const cateringButton = document.getElementById('cateringButton')


const modal = document.getElementById("myModal");

function mealPrepFunction() {
    modal.style.display = "flex";
    prepModalContent.innerHTML = `
        <h1 id='mpModalheader'>Meal Prep Options</h1>
        <hr>    
        <hr>
        <div id='mpList'>
          <div class="mpImgDiv">
          <img src="images/drive-download-20230408T034758Z-001/meal-prep1.JPG">  
          </div>
          <div>
          <p id='finePrint'>cost of protein may vary</p>
          `;
        }

        
        
        cateringButton.addEventListener('click', ()=>{
            modal.style.display = "flex";
            prepModalContent.innerHTML = `
            <h1 id='mpModalheader'>Catering Options</h1>
            <hr>    
            <hr>
            <div id='cateringList'>
            <img src="images/drive-download-20230408T034758Z-001/seafood-plate.JPG" >  
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