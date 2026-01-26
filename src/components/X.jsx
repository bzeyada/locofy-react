import PropTypes from "prop-types";

const X = ({ className = "", icon = false, size = "sm" }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden flex items-center justify-center p-2 ${className}`}
    >
      <img
        className="cursor-pointer [border:none] p-0 bg-[transparent] h-5 w-5 relative"
        alt=""
        src="/x.svg"
      />
    </div>
  );
};

X.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default X;
