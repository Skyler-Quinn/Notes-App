import React, { useState } from 'react';
import Note from './Note';
import { saveNotesToLocalStorage, getNotesFromLocalStorage } from '../utils';


const NotesApp = () => {
  const [notes, setNotes] = useState(getNotesFromLocalStorage());

  // Function to handle adding a new note
  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      text: '',
      position: { x: 100, y: 100 },
      color: '#FFB3BA', // background color
      textColor: '#000000', // text color
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  // Function to update a specific note
  const updateNote = (id, updatedData) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updatedData } : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  // Function to delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <div>
      <button className='btn' onClick={addNote}>+</button>
      <div className="notes-container">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onUpdate={updateNote}
            onDelete={deleteNote} // Passing delete function to each note
          />
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
