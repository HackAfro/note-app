import React from "react";
import NoteCard from "../note-card";

const styles = {
  marginTop: "16px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

const NoteList = ({ notes = [] }) => (
  <div className="note-list" style={styles}>
    {notes.map(note => (
      <NoteCard key={note.id} note={note} />
    ))}
  </div>
);

export default NoteList;
