
const loader1=document.getElementById('loading')
const blob=document.getElementById("blob2")
const teams=document.getElementById("teams")
setTimeout(()=>{
    blob.style.width="1000%"
},9500)

setTimeout(()=>{
   loader1.style.opacity="0"
   loader1.style.zIndex="0"
   teams.style.overflowY="visible"
},10000)

