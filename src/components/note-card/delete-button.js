import React from "react";
import Trash from "react-feather/dist/icons/trash";

/**
 * TODO
 * 1. Add gql and graphql imports
 *  */ 


const DeleteButton = ({ noteId, deleteNote, refetch }) => {

  
/**
 * TODO
 * 4. Show a confirm dialog before attempting to delete the note
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
 * 2. Write delete Mutation to delete note
 *  */ 
const DELETE_MUTATION = ``;


 
/**
 * TODO
 * 3. Setup graphql function enable the component run the delete mutation
 *  */ 
export default DeleteButton;
