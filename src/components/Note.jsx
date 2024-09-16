import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import NoteControls from './NoteControls';

const Note = ({ note, onUpdate, onDelete }) => {
  const { id, title, text, position, color, textColor } = note;
  const textareaRef = useRef(null);

  // Function to handle text or title change
  const handleTextChange = (key, value) => {
    onUpdate(id, { [key]: value });
  };

  // Function to handle drag and drop
  const handleDragStop = (e, data) => {
    onUpdate(id, { position: { x: data.x, y: data.y } });
  };

  // Function to adjust textarea height dynamically
  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on scroll height
    }
  };

  // Run autoResizeTextarea on component mount and whenever the text changes
  useEffect(() => {
    autoResizeTextarea();
  }, [text]);

  return (
    <Draggable
      defaultPosition={position}
      onStop={handleDragStop}
    >
      <div
        style={{
          backgroundColor: color,
          width: '300px',
          padding: '10px',
          borderRadius: '5px',
          position: 'absolute',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Title input */}
          <input
            type="text"
            value={title}
            onChange={e => handleTextChange('title', e.target.value)}
            placeholder="Title"
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              width: '80%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: textColor,
            }}
          />
          {/* Delete button */}
          <button
            onClick={() => onDelete(id)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'Black',
              fontSize: '20px',
              padding: '2px 5px',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </div>
        
        {/* Textarea for the note content */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => {
            handleTextChange('text', e.target.value);
            autoResizeTextarea(); // Trigger auto-resizing on change
          }}
          placeholder="Type here..."
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            resize: 'none', // Disable manual resizing
            overflow: 'hidden', // Hide scrollbars
            color: textColor,
            height: 'auto', // Start with auto height
            minHeight: '50px', // Set a minimum height for aesthetics
          }}
        />
        <NoteControls
          note={note}
          onUpdate={onUpdate}
        />
      </div>
    </Draggable>
  );
};

export default Note;
