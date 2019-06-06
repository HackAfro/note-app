import React from "react";
import Trash from "react-feather/dist/icons/trash";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const DeleteButton = ({ noteId, deleteNote }) => {

  
/**
 * TODO
 * Show a confirm dialog before attempting to delete the note
 *  */ 
  const onDeleteClick = () => {
    
  };
  return (
    <button onClick={onDeleteClick}>
      <Trash size={20} />
    </button>
  );
};

 
/**
 * TODO
 * Write delete Mutation to delete note
 *  */ 
const DELETE_MUTATION = ``;


 
/**
 * TODO
 * Setup graphql function enable the component run the delete mutation
 *  */ 
export default DeleteButton;
