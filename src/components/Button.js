const Button = ({ toggleForm, color, text }) => {
  const toggleButton = () => {
    toggleForm();
  };

  return (
    <>
      <button
        className="btn"
        onClick={toggleButton}
        style={{ backgroundColor: color }}>
        {text}
      </button>
    </>
  );
};

export default Button;
