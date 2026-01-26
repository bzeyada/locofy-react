import PropTypes from "prop-types";

const TypePrimaryStyleFilledStateDefaultSizemd40OnlyIconOff = ({
  className = "",
  onlyIcon = "Off",
  size = "xl (48)",
  state = "Default",
  style = "Filled",
  type = "Primary",
  leftIcon = false,
  rightIcon = false,
}) => {
  return (
    <div
      className={`w-[86px] rounded-button-md bg-brand-600 overflow-hidden flex flex-col items-start py-2 px-2.5 box-border relative isolate gap-2.5 text-left text-base text-white font-[Montserrat] ${className}`}
    >
      <div className="self-stretch flex items-center justify-center py-0 px-1 z-[0] shrink-0">
        <div className="relative leading-6 font-semibold">Button</div>
      </div>
    </div>
  );
};

TypePrimaryStyleFilledStateDefaultSizemd40OnlyIconOff.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,

  /** Variant props */
  onlyIcon: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default TypePrimaryStyleFilledStateDefaultSizemd40OnlyIconOff;
