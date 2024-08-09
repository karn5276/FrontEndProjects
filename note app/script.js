let btnEl=document.getElementById("btn");
let appEl=document.getElementById("app");

getNotes().forEach((note) => {
    const noteEl=createNoteEl(note.id,note.content);
    appEl.insertBefore(noteEl,btnEl);
});

// this below function is for creating multiple text area
function createNoteEl(id,content){
    const element=document.createElement("textarea");
    element.classList.add("note");
    element.placeholder="Empty Note";
    element.value=content; // here initially text area is empty
    
    // below event is for delete text area
    element.addEventListener("dblclick",()=>{
        const warning=confirm("Do you want to delete this note ? ")//this is for taking confirmation from user to delete a note.
        if(warning){
            deleteNote(id,element);
        }
    })

    //this below event for updating text area means user can write or remove text from text area this is update here
    element.addEventListener("input",()=>{
        updataNote(id,element.value);
    })
    return element;
}

// below function for delete the note
function deleteNote(){
     
}
function addNote(){
    const notes=getNotes(); // this is for save note do not delete note when page is reload.
    const noteObj={
        id: Math.floor(Math.random()*100000),
        content:"",
    };
    const noteE1=createNoteEl(noteObj.id,noteObj.content);
    
    // below line for adding text area before button 
    appEl.insertBefore(noteE1,btnEl);// here is 2 parameter noteEl which complte text area and 2nd parameter
    // is btnE1 which is said computer add that text area before this btnEl element or button.
    

    //below code for saving note do not delete note after page reload.
    notes.push(noteObj);
    saveNote(notes);
}
// here we save note in local storage
function saveNote(notes){
  localStorage.setItem("note-app",JSON.stringify(notes));//here stringify is used because local storage do not stored
  // complete array so by using this we store single single value.
}// note-app is a variable that is used another location

//below function for add note in 1 again and again by this function
// local storage do not replace newly
// creates note to previous 
function getNotes(){
     JSON.parse(localStorage.getItem("note-app") || "[]");
//parse is used for convert strig to array.
}
btnEl.addEventListener("click",addNote);