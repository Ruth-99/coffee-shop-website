// // document.getElementById();
// // document.querySelector();
// // document.querySelectorAll();

// // const name = document.getElementById("display")
// // console.log(name)

// // const p = document.querySelector("#paragraph")
// // console.log(p)

// // const h = document.querySelector(".heading")
// // console.log(h)

// // const allDigit = document.querySelectorAll(".digit")
// // console.log(allDigit)

// // const btn = document.querySelector(".buttons")
// // console.log(btn)

// // const clr = document.querySelector(".clear")
// // console.log(clr)

// // const allOperator = document.querySelectorAll(".operator")
// // console.log(allOperator)

// // const equals = document.querySelector(".equals")
// // console.log(equals)

// // const equalsbutton = document.querySelector(".equals");
// // equalsbutton.addEventListener('click', function(){
// //     console.log("Equals button has been clicked")
// // })

// // const alldigits = document.querySelectorAll(".digit")
// // console.log(alldigits);

// // alldigits.forEach((button) => {
// //     button.addEventListener("click", ()=>{
// //         console.log("Button was clicked")
// //     })
// // });

// // for single class//
// const clr = document.querySelector(".clear")
// console.log(clr)

// clr.addEventListener('click',()=>{
//     console.log("Clear button has been clicked")
// })

// // For classes with similar names- Using forEach//
// const allOperator = document.querySelectorAll(".operator")
// console.log(allOperator)

// allOperator.forEach((operatorbuttons)=>{
// operatorbuttons.addEventListener('dblclick', ()=>{
//     console.log("operator button has been clicked")
// })

// })


buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        console.log("Button was clicked")
    })
});