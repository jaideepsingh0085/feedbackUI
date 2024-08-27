const btn = document.getElementById("btn")
const rating = document.querySelectorAll('.rating')
let selectedValue = ""
let flag = false;

rating.forEach(element => {
    element.addEventListener('click' ,function(){
      rating.forEach(ele => ele.classList.remove('active'));
      this.classList.add('active');
      flag = true
      selectedValue = this.dataset.value;
    })
})

const sendReview = (e) => {
   const card = document.getElementById("card")
   card.className= 'card'
   if(flag) {
       card.innerHTML = `
       <h2 class= "result">Thank You</h2>
       <h2 class = "result">Feedback : ${selectedValue}</h2>
       <p>We'll use your feedback to improve our customer support.</p>
       ` 
   } else {
    alert("Please select feedback first")
    return
   }

}

btn.addEventListener('click', sendReview)