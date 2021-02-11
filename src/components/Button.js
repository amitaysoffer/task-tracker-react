const Button = ({ onShow, color, text }) => {
  return (
    <>
      <button
        className="btn"
        onClick={onShow}
        style={{ backgroundColor: color }}>
        {text}
      </button>
    </>
  );
};

export default Button;
