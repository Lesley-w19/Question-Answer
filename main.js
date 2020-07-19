// transvering through the dom
const btns = document.querySelectorAll(".question-btn");


btns.forEach((btn)=>{
//  console.log(btn);
 btn.addEventListener('click', (e)=>{
    //  console.log(e);
    //  console.log(e.currentTarget.parentElement.parentElement);
   let showText = e.currentTarget.parentElement.parentElement
//    console.log(showText);
   showText.classList.toggle("show-text");
 })
})