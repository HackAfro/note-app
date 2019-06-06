import React, { useState, useEffect } from 'react';
import { HalfCircleSpinner } from 'react-epic-spinners';

// TODO -- 1. Import gql and graphql functions.

import Header from './components/header';
import NoteForm from './components/note-form';
import NoteList from './components/note-list';

import './App.css';

function App({ loading, notes }) {
  const [stateNotes, setNotes] = useState([]);

  // Here we set the notes returned from the query to state. 
  useEffect(() => {
    setNotes(notes);
  }, [notes]);

  // TODO -- 4. Add a new note to the local state after graphql mutation is complete
  const addNewNote = (note) => {};

  // TODO -- 5. Remove a single note from the local state
  const removeNote = (id) => {};

  return (
    <main className="App">
      <Header />
      <div className="container">
        <div>
          <NoteForm saveNewNote={addNewNote} />
        </div>
        <div className="" id="notes-box">
          <div className="text-center">
            <div className="header text-center">
              {loading ? (
                <div className="d-flex justify-content-center p-5">
                  <HalfCircleSpinner size={50} color="grey" />
                </div>
              ) : (
                <div>
                  <NoteList notes={stateNotes} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// TODO -- 2. Write query to get notes from 8base
const NOTE_LIST_QUERY = '';

// TODO -- 3. Use graphql HOC to attach query to the App component.
export default App;
