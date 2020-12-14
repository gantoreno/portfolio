import './Project.scss';

const Project = ({ src, alt, title, link }) => {
  return (
    <div className="mb-6 lg:flex content-center flex-wrap bg-grey rounded shadow-lg">
      <div className="lg:flex lg:w-1/3">
        <div className="lg:flex-1 rounded overflow-hidden">
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="lg:flex lg:w-2/3">
        <div className="lg:flex-1">
          <div className="mt-6 lg:mt-0 lg:ml-6 text-left flex flex-col justify-center items-start h-full">
            <h1 className="mb-6 font-bold text-xl sm:text-2xl text-left">
              {title}
            </h1>
            <a href={link} target="_blank" rel="noreferrer">
              <button className="p-3 bg-white text-xs sm:text-base text-black font-bold duration-200 hover:bg-red-400 hover:text-white rounded">
                View on Bēhance <i className="fab fa-behance ml-3"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
