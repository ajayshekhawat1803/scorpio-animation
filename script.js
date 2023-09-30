const container = document.querySelector("#container")
const img = document.querySelector("#carimg")
const arrow = document.querySelector("#arrow")
const speed = document.querySelector("#speed").style
const description = document.querySelector("#description").style
const imgCont = document.querySelector("#img-cont")
const details = document.querySelector("#details").style

imgCont.addEventListener("mouseover",()=>{
    // console.log("aagya");
    img.style.scale = 1.1
})
imgCont.addEventListener("mouseleave",()=>{
    img.style.scale = 1
    // console.log("gya");
    
})
arrow.addEventListener("mouseover",()=>{
    imgCont.style.boxShadow= ` 4px 0px 15px rgba(0, 0, 0, 0.678)`
    arrow.style.scale=1.05
})
arrow.addEventListener("mouseleave",()=>{
    imgCont.style.boxShadow= "0px 0px 7px rgba(1px, 0, 0, 0.878)"
    arrow.style.scale=1
})
arrow.addEventListener("click",()=>{
    if (container.style.width != "800px") {
        container.style.width = "800px"
        arrow.style.transform = "rotate(180deg)"
        speed.display = "flex"
        description.display= "block"
        img.style.filter="brightness(80%)"
        details.display="block"
    }else{
        speed.display = "none"
        container.style.width = "unset"
        arrow.style.transform = "rotate(0deg)"
        description.display= "none"
        img.style.filter="none"
        details.display="none"
        arrow.style.transform="translate(50%,-50%)"
    }
})