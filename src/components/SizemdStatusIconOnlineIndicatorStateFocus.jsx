import Avatar from "./Avatar";
import PropTypes from "prop-types";

const SizemdStatusIconOnlineIndicatorStateFocus = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-3 text-left text-num-14 text-gray-700 font-montserrat ${className}`}
    >
      <Avatar
        placeholder={false}
        size="md"
        state="Default"
        statusIcon="Online indicator"
        text={false}
        avatarHeight="48px"
        avatarWidth="48px"
      />
      <div className="flex flex-col items-start">
        <div className="relative leading-num-20 font-semibold">Olivia Rhye</div>
        <div className="relative leading-num-20 text-gray-600">
          olivia@service.com
        </div>
      </div>
    </div>
  );
};

SizemdStatusIconOnlineIndicatorStateFocus.propTypes = {
  className: PropTypes.string,
};

export default SizemdStatusIconOnlineIndicatorStateFocus;
