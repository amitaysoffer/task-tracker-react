import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ onShow, isShowForm, title }) => {
  return (
    <div style={styleHeader}>
      <h1 style={{ fontWeight: 400 }}>{title}</h1>
      <Button
        onShow={onShow}
        color={isShowForm ? 'red' : 'green'}
        text={isShowForm ? 'Close' : 'Open'}
      />
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const styleHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 400,
};

export default Header;
