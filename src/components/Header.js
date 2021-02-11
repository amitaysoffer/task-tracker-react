import Button from './Button';

const Header = ({ toggleForm, isShowForm }) => {
  return (
    <div style={styleHeader}>
      <h1 style={{ fontWeight: 400 }}>Task Tracker</h1>
      <Button
        toggleForm={toggleForm}
        color={isShowForm ? 'red' : 'green'}
        text={isShowForm ? 'Close' : 'Open'}
      />
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
