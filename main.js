//  1... using selectors inside the element

// const question= document.querySelectorAll(".questions-wrapper");
// // console.log(question);

// question.forEach((qstn)=>{
//     // console.log(qstn);
//     const btn = qstn.querySelector(".question-btn");
//     // console.log(btn);
//     btn.addEventListener('click', ()=>{
//         // to enable only one question-text to open at a time
//         question.forEach((value)=>{
//                if(value !== qstn){
//                    value.classList.remove("show-text");
//                }
//         })
//         qstn.classList.toggle("show-text");
//     })
// })


//  2... transversing through the dom

const question = document.querySelectorAll(".questions-wrapper");
// console.log(question);
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        // console.log(e.currentTarget.parentElement.parentElement.parentElement);
        const showText = e.currentTarget.parentElement.parentElement.parentElement;

        // to enable the question-text to open one at a time
        question.forEach((item)=>{
            // console.log(item);
            if(item !== showText){
                item.classList.remove("show-text");
            }
        })

        showText.classList.toggle("show-text");
    })
  
})