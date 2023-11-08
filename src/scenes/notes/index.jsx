import React from 'react'
import { useState } from 'react'
import  Button  from './Button';
import { useCallback } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const addNote = useCallback(() => {
      const newNote = "random";
      setNotes(n => [...n, newNote]);
     }, [setNotes]);
    return (
      <div>
      <h1>Button:</h1>
      <Button addNote={addNote}/>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      </div>
    );
   };

   export default Notes