import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { HalfCircleSpinner } from 'react-epic-spinners';

import Header from './components/header';
import NoteForm from './components/note-form';
import NoteList from './components/note-list';

import './App.css';

function App({ loading = false, notes, refetch }) {
  const [stateNotes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notes);
  }, [notes]);

  return (
    <main className="App">
      <Header />
      <div className="container">
        <div>
          <NoteForm refetch={refetch} />
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
                  <NoteList notes={stateNotes} refetch={refetch} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const NOTE_LIST_QUERY = gql`
  query {
    notesList {
      items {
        id
        title
        text
      }
    }
  }
`;

export default graphql(NOTE_LIST_QUERY, {
  props: (result) => {
    const { data } = result;
    const { loading, refetch } = data;
    let notes = [];
    if (data && data.notesList) notes = data.notesList.items;
    console.log(data);
    return {
      loading,
      notes,
      refetch,
    };
  },
})(App);
