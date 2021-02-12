import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <p>Copyright &copy; Amitay Soffer</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
