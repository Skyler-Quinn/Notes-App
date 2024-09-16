import React from 'react';

const NoteControls = ({ note, onUpdate }) => {
  const { id, color, textColor } = note;

  // Predefined pastel colors
  const pastelColors = [
    { label: 'Light Pink', value: '#FFB3BA' },
    { label: 'Light Peach', value: '#FFDFBA' },
    { label: 'Light Yellow', value: '#FFFFBA' },
    { label: 'Light Green', value: '#BAFFC9' },
    { label: 'Light Blue', value: '#BAE1FF' },
    { label: 'Light Purple', value: '#D7BAFF' },
    { label: 'Pastel Red', value: '#FFC4C4' },
    { label: 'Pastel Green', value: '#C4FFC4' },
    { label: 'Pastel Violet', value: '#C4C4FF' },
    { label: 'Pastel Orange', value: '#FFD6A5' },
  ];

  const textColors = [
    { label: 'Black', value: '#000000' },
    { label: 'Dark Gray', value: '#4D4D4D' },
    { label: 'Brown', value: '#5D4037' },
    { label: 'Dark Red', value: '#B71C1C' },
    { label: 'Dark Green', value: '#1B5E20' },
    { label: 'Dark Blue', value: '#0D47A1' },
    { label: 'Dark Purple', value: '#4A148C' },
    { label: 'Navy', value: '#000080' },
    { label: 'Dark Olive', value: '#3E2723' },
    { label: 'Dark Teal', value: '#004D40' },
  ];

  // Function to handle color change
  const handleColorChange = (key, value) => {
    onUpdate(id, { [key]: value });
  };

  return (
    <div style={{display:'flex'}}>
      <div>
        <label style={{color:'#000000'}}>Background Color: </label>
        <select
          value={color}
          onChange={e => handleColorChange('color', e.target.value)}
          style={{ width: '100%', padding: '5px' }}
        >
          {pastelColors.map((colorOption, index) => (
            <option
              key={index}
              value={colorOption.value}
              style={{
                backgroundColor: colorOption.value,
                color: 'black', // Use black or white text for contrast based on color
                padding: '5px',
              }}
            >
              {colorOption.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label style={{color:'#000000'}}>Text Color: </label>
        <select
          value={textColor}
          onChange={e => handleColorChange('textColor', e.target.value)}
          style={{ width: '100%', padding: '5px' }}
        >
          {textColors.map((colorOption, index) => (
            <option
              key={index}
              value={colorOption.value}
              style={{
                backgroundColor: colorOption.value, // Visual representation of text color
                color: 'white', // Keep contrast high
                padding: '5px',
              }}
            >
              {colorOption.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NoteControls;
