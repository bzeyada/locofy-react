import X from "./X";
import PropTypes from "prop-types";

const Default = ({
  className = "",
  size = "Small (36)",
  status1 = "🆘 Error",
  style = "Filled",
  icon,
  size1,
}) => {
  return (
    <div className={`rounded-lg flex items-start ${className}`}>
      <X icon={icon} size={size1} />
    </div>
  );
};

Default.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  size1: PropTypes.any,

  /** Variant props */
  size: PropTypes.string,
  status1: PropTypes.string,
  style: PropTypes.string,
};

export default Default;
