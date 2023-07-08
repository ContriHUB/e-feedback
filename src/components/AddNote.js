import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note,setnote] = useState({title:"",description:"",tag:"default"});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div div className="container my-3">
        <h5>Add a note</h5>
        <form className="my -3">
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
  )
}

export default AddNote