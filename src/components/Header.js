const Header = ({ toggleForm }) => {
  return (
    <div style={styleHeader}>
      <h1 style={{ fontWeight: 400 }}>Task Tracker</h1>
      <button onClick={toggleForm} className="btn">
        Close
      </button>
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
