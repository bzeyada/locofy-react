import Default from "./Default";
import PropTypes from "prop-types";

const StatusFeatureStyleFilledSizeSmall = ({
  className = "",
  size = "Small (36)",
  status1 = "🆘 Error",
  style = "Filled",
  editText = "Insert your alert title here!",
  leftIcon = true,
  dismissIcon = true,
}) => {
  return (
    <div
      className={`w-[390px] rounded-radius-8 bg-gray-50 max-w-full overflow-hidden flex items-center py-2 px-2.5 box-border gap-2 text-left text-sm text-gray-700 font-[Montserrat] ${className}`}
    >
      {!!leftIcon && (
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-5 w-5 relative"
          alt=""
          src="/rocket.svg"
        />
      )}
      <div className="flex-1 relative leading-5 font-medium">{editText}</div>
      {!!dismissIcon && (
        <Default
          size="Small 36"
          status1="🚀 Feature"
          style="Filled"
          icon="Only"
          size1="sm"
        />
      )}
    </div>
  );
};

StatusFeatureStyleFilledSizeSmall.propTypes = {
  className: PropTypes.string,
  editText: PropTypes.string,
  leftIcon: PropTypes.bool,
  dismissIcon: PropTypes.bool,

  /** Variant props */
  size: PropTypes.string,
  status1: PropTypes.string,
  style: PropTypes.string,
};

export default StatusFeatureStyleFilledSizeSmall;
