import React from "react";
import NoteCard from "../note-card";

const styles = {
  marginTop: "16px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

const NoteList = ({ notes = [], refetch }) => (
  <div className="note-list" style={styles}>
    {notes.map(note => (
      <NoteCard key={note.id} note={note} refetch={refetch} />
    ))}
  </div>
);

export default NoteList;
