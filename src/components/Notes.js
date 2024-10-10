import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
      getNotes()
    } else {
      navigate("/login")
    }
    
  }, []);
  const [note,setnote] = useState({id:"",etitle:"",edescription:"",etag:"default"});
  const buttonref = useRef(null);
  const refclose = useRef(null);
  const updateNote = (currentNote) => {
    buttonref.current.click();
    setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    
  };
  const handleClick = (e)=>{
    console.log("updating note",note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
    props.showAlert("Updated Successfully","Success");

    
}
const onChange = (e)=>{
    setnote({...note,[e.target.name]: e.target.value})
}

  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button
        ref={buttonref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="my -3">
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  aria-describedby="emailHelp"
                  value={note.etitle}
                  required onChange={onChange}
                  minLength={3}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  required onChange={onChange}
                  minLength={5}
                />
              </div>
              <div className="mb-3">
                <label for="tag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={onChange}
                />
              </div>
              
            </form>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<3 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
      <h3 className="text-3xl  text-gray-700 text-center my-2 px-3">
      Your Feedbacks
      </h3>
        <div className="container mx-2">
        {notes.length===0 && 'No feedbacks yet'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          );
        })}
      </div>
    </>
  );
}
