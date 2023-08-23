const loader2=document.getElementById('loading1')
const blob=document.getElementById("blob3")
const events=document.getElementById("events")
setTimeout(()=>{
    blob.style.width="1000%"
},4500)


setTimeout(()=>{
    loader2.style.opacity="0"
    loader2.style.zIndex="0"
    events.style.overflowY="visible"
    
},5000)