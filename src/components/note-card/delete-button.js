import React from "react";
import Trash from "react-feather/dist/icons/trash";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const DeleteButton = ({ noteId, deleteNote }) => {
  const onDeleteClick = () => {
    const data = {
      id: noteId
    };
    const remove = window.confirm("Are you sure you want to delete this note?");
    if (remove) {
      deleteNote({ variables: { data } });
    }
  };
  return (
    <button onClick={onDeleteClick}>
      <Trash size={20} />
    </button>
  );
};

const DELETE_MUTATION = gql`
  mutation DeleteNote($data: NoteDeleteInput!) {
    noteDelete(data: $data) {
      success
    }
  }
`;

export default graphql(DELETE_MUTATION, {
  name: "deleteNote"
})(DeleteButton);
