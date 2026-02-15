import { useMemo } from "react";
import PropTypes from "prop-types";

const getAvatarContainerStyle = (styleKey) => {
  switch (styleKey) {
    case "false-md-Focused-Online indicator-false":
      return "focus-within:bg-[url('/public/Avatar@3x.png')]";
  }
};
const getAvatarOnlineIndicatorStyle = (styleKey) => {
  switch (styleKey) {
    case "false-md-Focused-Online indicator-false":
      return "group-focus-within:rounded-[5px] group-focus-within:w-[13px] group-focus-within:h-[13px]";
  }
};

const Avatar = ({
  className = "",
  placeholder = false,
  size = "xs",
  state = "Default",
  statusIcon = false,
  text = false,
  avatarHeight,
  avatarWidth,
}) => {
  const variantKey = [placeholder, size, state, statusIcon, text].join("-");

  const avatarStyle = useMemo(() => {
    return {
      height: avatarHeight,
      width: avatarWidth,
    };
  }, [avatarHeight, avatarWidth]);

  return (
    <div
      className={`h-14 w-full relative rounded-[200px] bg-[url('/public/Avatar1@3x.png')] bg-cover bg-no-repeat bg-[top] group ${getAvatarContainerStyle(
        variantKey
      )} ${className}`}
      style={avatarStyle}
    >
      <span
        className={`absolute right-[-1.5px] bottom-[-1.5px] rounded-md bg-success-500 border-white border-solid border-[1.5px] box-border w-[15px] h-[15px] overflow-hidden ${getAvatarOnlineIndicatorStyle(
          variantKey
        )}`}
      />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  placeholder: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  statusIcon: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  avatarHeight: PropTypes.string,
  avatarWidth: PropTypes.string,
};

export default Avatar;
