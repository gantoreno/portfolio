import './FadedHeader.scss';

const FadedHeader = ({ pictureUrl }) => {
  return (
    <div
      className="faded-header min-h-1/2 p-24 w-full"
      style={{
        backgroundImage: `url('${pictureUrl}')`,
      }}
    ></div>
  );
};

export default FadedHeader;
