const loader2=document.getElementById('loading1')
const blob=document.getElementById("blob3")

setTimeout(()=>{
    blob.style.width="200%"
},4500)


setTimeout(()=>{
    loader2.style.opacity="0"
    loader2.style.zIndex="0"
    
},5000)