import React, { useState } from 'react';

/**
 * TODO
 * 1. Make use of gql and graphql functions to setup the component
 *  */

import './form.css';

const NoteForm = ({ saveNewNote, noteCreate }) => {
  const [step, setStep] = useState(1);
  const [note, setNote] = useState({
    title: '',
    text: '',
  });

  const onInputChange = (e) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return !!note.title;
      case 2:
        return !!note.text;

      default:
        return false;
    }
  };

  const completeStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      const stepComplete = isStepComplete(step);
      if (stepComplete) {
        setStep(step + 1);
        return;
      }
    }

    const formComplete = isStepComplete(step);
    if (formComplete) {
      submit(note);
    }
  };

  /**
   * TODO
   * 1.  Send request to create the note on 8base
   *  */
  const submit = async (note) => {};

  return (
    <form className="note-form" onSubmit={completeStep}>
      <div className="inputs-holder">
        {step === 1 ? (
          <div className="form-group">
            <input
              className="form-control app-input"
              id="title"
              name="title"
              placeholder="The post title"
              value={note.title}
              onChange={onInputChange}
            />
          </div>
        ) : (
          <div className="form-group">
            <textarea
              className="form-control app-input"
              id="note-text"
              rows="3"
              placeholder="Create a note for future use"
              value={note.text}
              name="text"
              onChange={onInputChange}
            />
          </div>
        )}
      </div>
      {step > 1 && (
        <button
          className="prev-button"
          id="prev"
          type="button"
          onClick={() => setStep(step - 1)}
        >
          Prev
        </button>
      )}
      <button className="submit-button" id="stepper" type="submit">
        {step === 1 ? <span>Next</span> : <span>Submit</span>}
      </button>
    </form>
  );
};

/**
 * TODO
 * Write mutation to create a note on 8base
 *  */

const NOTE_MUTATION = '';

/**
 * TODO
 * Wrap the function
 *  */
export default graphql(NOTE_MUTATION, {
  name: 'noteCreate',
})(NoteForm);
