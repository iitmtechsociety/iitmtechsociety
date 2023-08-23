const loader3=document.getElementById('loading2')
const blob=document.getElementById("blob1")

setTimeout(()=>{
    blob.style.width="200%"
},4500)
setTimeout(()=>{
    
    loader3.style.opacity="0"
    loader3.style.zIndex="0"
    
    
},5000)
document.addEventListener("wheel",()=>{
    if (window.scrollY>=600){
        console.log(window.scrollY)
        document.getElementById("nav").classList.add("light-bg")
    }
    else{
        console.log(window.scrollY)
        document.getElementById("nav").classList.remove("light-bg")
    }
})