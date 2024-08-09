const ratingEls=document.querySelectorAll(".rating");
const btnEl=document.getElementById("btn");
const containerEl=document.getElementById("container");
let selectedRating="";


ratingEls.forEach((ratingEl)=>{ //it meaning is for each class apply below things.
    ratingEl.addEventListener("click",(event)=>{ // for each class apply event listner.
        removeActive(); // for each class call removeactive().
        selectedRating=event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        console.log(selectedRating);
        let data=[];
        data.push(selectedRating);
        console.log(data);
        
    });
});

// following function is created for removing all active class.
// beacuase when we select any emoji and when we select another emoji then both are selected
// due to both have active class due to user click on that 2 emoji.
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    });
}; 

btnEl.addEventListener('click',()=>{
    if(selectedRating!==""){
        containerEl.innerHTML=`<strong>Thank you</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve
        our customer support.`;
    }
});


// active class means when user select any block or button or element then it active or not it told by printing
// msg to the console.