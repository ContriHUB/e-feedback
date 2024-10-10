import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              <h5 className="card-title mb-1">{note.title}</h5>
              <p className="card-text mb-0 text-muted">{note.description}</p>
            </div>
            <div className="d-flex align-items-center">
              <i
                className="fa-solid fa-trash mx-2 text-danger cursor-pointer"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "danger");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2 text-primary cursor-pointer"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
