import PropTypes from "prop-types";

const Card = ({
  className = "",
  showAvatar = false,
  title,
  description,
  showOnlineIndicator = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 text-left text-num-16 text-gray-700 font-montserrat sm:flex-row sm:flex-wrap ${className}`}
    >
      {!!showAvatar && (
        <div className="h-14 w-14 relative rounded-[200px] bg-[url('/public/Avatar@3x.png')] bg-cover bg-no-repeat bg-[top]">
          {!!showOnlineIndicator && (
            <span className="absolute right-[-1.5px] bottom-[-1.5px] rounded-md bg-success-500 border-white border-solid border-[1.5px] box-border w-[15px] h-[15px] overflow-hidden" />
          )}
        </div>
      )}
      <div className="flex flex-col items-start sm:flex-row">
        <div className="relative leading-6 font-semibold">{title}</div>
        <div className="relative leading-6 text-gray-600">{description}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  showAvatar: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  showOnlineIndicator: PropTypes.bool,
};

export default Card;
