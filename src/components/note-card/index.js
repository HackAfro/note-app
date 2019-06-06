import React from 'react';

import DeleteButton from './delete-button';
import './note.css';

const NoteCard = ({ note, refetch }) => (
  <div className="note-card">
    <div className="card text-white bg-card mb-3">
      <div className="card-header">
        <DeleteButton noteId={note.id} refetch={refetch} />
      </div>
      <div className="card-body">
        <h4 className="card-title note-title">{note.title}</h4>
        <p className="card-text note-text">{note.text}</p>
      </div>
    </div>
  </div>
);

export default NoteCard;
