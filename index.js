const bar=document.querySelector('.bar')
const cross=document.querySelector('.cross')
const elements=document.querySelector('.elements')
const itEl=document.querySelectorAll('.it')
const field=document.querySelector('.field')
let stri = window.location.href;
console.log(itEl)
// if(window.innerWidth>=768){
// window.onscroll=()=>{
    
//     let k=0
//     let Yscroll=window.scrollY

//     itEl.forEach((element,i)=>{
//         if(i===k){
//             element.style.color="aqua"
//         }else{
//             element.style.color="black"
//         }

//     })
//     console.log( Yscroll)
    
// }
// }


const field_arr=["ML Developer","FrontEnd Developer","Programmer","Django Developer"]
let i=0
const fieldChange=setInterval(()=>{
    
    i=i%4
   
   field.innerText=`${field_arr[i]}`
   i++;
},1000)
// Nav bar logic start
function colorChange(e){
    itEl.forEach((element,i)=>{
        console.log(i)
        if(element===e){
            element.style.color="aqua"
        }else{         
            element.style.color="black"
        }
    })
}

itEl.forEach((e)=>{
    e.addEventListener('click',()=>{
        colorChange(e)
    })
})



bar.addEventListener('click',()=>{
    bar.style.display="none"
    cross.style.display="block"
    elements.style.display="block"
})

cross.addEventListener('click',()=>{
    bar.style.display="block"
    cross.style.display="none"
    elements.style.display="none"
})

// Nav bar logic end

