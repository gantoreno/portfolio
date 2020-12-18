import './FadedHeader.scss';

const FadedHeader = ({ pictureUrl }) => {
  return (
    <div
      className="w-full p-24 faded-header min-h-1/2"
      style={{
        backgroundImage: `url('${pictureUrl}')`,
      }}
    ></div>
  );
};

export default FadedHeader;
