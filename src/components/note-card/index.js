import React from 'react';
import { Rnd } from 'react-rnd';

import DeleteButton from './delete-button';
import './note.css';

const NoteCard = ({ note, refetch }) => {
  const position = {
    x: Math.floor(Math.random() * (800 - 0 + 1) + 0),
    y: Math.floor(Math.random() * (500 - 0 + 1) + 0),
  };
  
  return (
    <Rnd default={{ width: 250, height: 230, ...position }}>
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
    </Rnd>
  );
};

export default NoteCard;
