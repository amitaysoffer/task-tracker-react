import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ onShow, isShowForm, title }) => {
  const location = useLocation();

  return (
    <div style={styleHeader}>
      <h1 style={{ fontWeight: 400 }}>{title}</h1>

      {location.pathname === '/' && (
        <Button
          onShow={onShow}
          color={isShowForm ? 'red' : 'green'}
          text={isShowForm ? 'Close' : 'Open'}
        />
      )}
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
