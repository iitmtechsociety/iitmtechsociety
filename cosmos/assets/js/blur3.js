const loader3=document.getElementById('loading2')
const blob=document.getElementById("blob1")
const home=document.getElementById("home")
setTimeout(()=>{
    blob.style.width="1000%"
},4500)
setTimeout(()=>{
    
    loader3.style.opacity="0"
    loader3.style.zIndex="0"
    home.style.overflowY="visible"
    
},5000)
