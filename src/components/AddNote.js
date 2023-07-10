import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note,setnote] = useState({title:"",description:"",tag:""});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""});
        props.showAlert("Added Successfully","Success");
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
              value={note.title}
              required onChange={onChange}
              minLength={3}
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
              value={note.description}
              required onChange={onChange}
              minLength={5}
            />
          </div>
          <div class="mb-3">
            <label for="tag" class="form-label">
              Tag
            </label>
            <input
              type="text"
              class="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          <button disabled={note.title.length<3 || note.description.length<5} type="submit" class="btn btn-primary" onClick={handleClick}>
            Add feedback
          </button>
        </form>
      </div>
  )
}

export default AddNote