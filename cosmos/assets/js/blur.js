
const loader1=document.getElementById('loading')
const blob=document.getElementById("blob2")

setTimeout(()=>{
    blob.style.width="200%"
},6500)

setTimeout(()=>{
    loader1.style.opacity="0"
    loader1.style.zIndex="0"
    
},7000)
