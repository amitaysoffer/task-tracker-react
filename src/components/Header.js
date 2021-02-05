import { findByLabelText } from '@testing-library/react';
import React from 'react';

const Header = () => {
  return (
    <div style={styleHeader}>
      <h1 style={{ fontWeight: 400 }}>Task Tracker</h1>
      <button className="btn">Close</button>
    </div>
  );
};

const styleHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 400,
};

export default Header;
