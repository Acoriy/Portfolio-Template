
import {RiArrowRightLine} from 'react-icons/ri'

// eslint-disable-next-line react/prop-types
const ButtonPage = ({ title }) => {
  return (
    <div>
      <button className="flex flex-row justify-center items-center gap-4 bg-brightColor rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer dark:hover:bg-white dark:text-black">
        {title}
        <RiArrowRightLine/>
      </button>
    </div>
  );
};

export default ButtonPage;
