

import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

    const notesInitial=[
        
        {
           
              "_id": "64a94ed4b5f5617d57a4ff3b",
              "user": "64a921689e10a772abdeca6b",
              "title": "My title updated",
              "description": "please wake up late",
              "tag": "private",
              "date": "2023-07-08T11:56:04.534Z",
              "__v": 0
            
        }

    ]

    const [notes,setnotes] = useState(notesInitial)
    console.log("adding a new note");
    const addNote = (title,description,tag)=>{
        const note={
           
            "_id": "64a94ed4b5f5617d57a4ff3b",
            "user": "64a921689e10a772abdeca6b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-08T11:56:04.534Z",
            "__v": 0
          
      };
        setnotes(notes.concat(note));
    }

    const deleteNote = ()=>{

    }

    const editNote = ()=>{

    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;