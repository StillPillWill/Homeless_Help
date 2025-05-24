// src/ToggleButton.js
import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false); // State to track if the button is 'on' or 'off'

  const toggleState = () => {
    setIsOn(!isOn); // Toggle the boolean value
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Toggle Switch</h2>
      <button
        onClick={toggleState}
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: isOn ? 'green' : 'red', // Change color based on state
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isOn ? 'ON' : 'OFF'} {/* Change text based on state */}
      </button>
      <p>The switch is currently: {isOn ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
}

export default ToggleButton;