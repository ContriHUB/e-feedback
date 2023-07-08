import React, { useContext } from "react";
import noteContext from '../context/notes/noteContext'
import Notes from "./Notes";
import AddNote from "./AddNote";
export const Home = () => {
  const context = useContext(noteContext);
  const {notes,setnotes} = context;
  return (
    <div>
      
      <Notes/>
    </div>
  );
};
