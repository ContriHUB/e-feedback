

import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const host ='http://localhost:5000';
    const notesInitial = []
    const [notes,setnotes] = useState(notesInitial)

    const getNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            
            cors:{
                // origin:"https://127.0.0.1:3000",
                origin: '*',
                credentials: true,
                methods: ["GET", "POST"],
                
            },
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
            
        });
        const json = await response.json()
        
        console.log(JSON.stringify(json))
        setnotes(json)
    }
    
    const addNote = async (title,description,tag)=>{
        
        const response = await fetch(`${host}/api/notes/addnote`, {
            cors:{
                // origin:"https://127.0.0.1:3000",
                origin: '*',
                // origin: "http://localhost:5000",
                credentials: true,
                methods: ["GET", "POST"],
            },
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });

        const note=await response.json();
        
        
        
        setnotes(notes.concat(note));
    }

    const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
        });
        const json = response .json();
        
        console.log(json);
        console.log("Deleting the note"+id);
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setnotes(newNotes);
    }

    const editNote = async (id,title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            cors:{
                // origin:"https://127.0.0.1:3000",
                origin: '*',
                // origin: "http://localhost:5000",
                credentials: true,
                methods: ["GET", "POST"],
            },
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await response .json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        for(let index=0;index<newNotes.length;index++){
            const element = newNotes[index];
            if(element._id===id){
                newNotes[index].title=title;
                newNotes[index].description=description;
                newNotes[index].tag=tag;
                break;
            }
        }
        setnotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;