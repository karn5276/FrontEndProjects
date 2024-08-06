const form2search=document.getElementById("form2search");
const navsearchs=document.querySelectorAll(".fromsearch");
const form1=document.getElementById("form1");
const logo=document.getElementById("logo");
const div10=document.getElementById("div10");
const exam10=document.querySelectorAll(".exam");
const searchinput=document.getElementById("searchinput");
const examdiv1=document.getElementById("examDiv1");
const mainDiv=document.getElementById("mainDiv");
const options=document.querySelectorAll(".options");
const seeallexam=document.getElementById("SeeAllExam");

seeallexam.addEventListener("click",()=>{
    console.log(window);
    window.location.reload();
})


options.forEach((option)=>{
    option.addEventListener("click",(event)=>{
        const value=event.target.innerText;
        let choice=0;
        let flag=false;
        for(let i=0;i<exam10.length;i++){
            exam10[i].parentElement.style.display="inline";
            exam10[i].parentElement.parentElement.firstElementChild.style.display="inline";
        }
        for(let i=0; i<exam10.length;i++ ){
            if(exam10[i].innerText==value || exam10[i].innerText==value){
                console.log( "inside if ==>", exam10[i].parentElement.parentElement.firstElementChild)
                choice=i;
                flag=true;
            }
            else{
                exam10[i].parentElement.style.display="none";
                exam10[i].parentElement.parentElement.firstElementChild.style.display="none";
            }
        }
        exam10[choice].parentElement.parentElement.firstElementChild.style.display="block";
        seeallexam.style.display="inline-block";
    });
});

let data=mainDiv.innerHTML;


navsearchs.forEach((search)=>{
    search.addEventListener('click',()=>{
        const value=searchinput.value;
        // mainDiv.innerHTML=`${data}`;
        console.log(data);

        for(let i=0;i<exam10.length;i++){
            exam10[i].parentElement.style.display="inline";
            exam10[i].parentElement.parentElement.firstElementChild.style.display="inline";
        }

        let choice=0;
        let flag=false;

        for(let i=0; i<exam10.length;i++ ){
            if(exam10[i].innerText.toUpperCase()==value.toUpperCase() || exam10[i].innerText.toLowerCase()==value.toLowerCase()){
                console.log( "inside if ==>", exam10[i].parentElement.parentElement.firstElementChild)
                choice=i;
                flag=true;
            }
            else{
                exam10[i].parentElement.style.display="none";
                exam10[i].parentElement.parentElement.firstElementChild.style.display="none";
            }
        }

        exam10[choice].parentElement.parentElement.firstElementChild.style.display="block";
        // if(!flag){
        //       mainDiv.innerHTML=`<h3>Not Found Any Exam </h3>`;
        // }
        seeallexam.style.display="inline-block";    
});
});


