let navlinks=document.querySelectorAll(".navlink");

navlinks.forEach((navlink)=>{
    navlink.addEventListener("click",(event)=>{
        // event.target.classList.add("active");
        console.log("hi");
    })
})