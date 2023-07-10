import React, { useContext } from "react";
import noteContext from '../context/notes/noteContext'
import Notes from "./Notes";
import AddNote from "./AddNote";
export const Home = (props) => {
  const context = useContext(noteContext);
  const {notes,setnotes} = context;
  const {showAlert} = props;
  return (
    <div>
      
      <Notes showAlert={showAlert}/>
    </div>
  );
};
