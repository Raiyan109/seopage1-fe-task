import Cards from "./Cards";
import './column.css'

const Column = ({ heading }) => {
    return (
        <div className="bg-gray-100 p-2 overflow-y-scroll overflow-x-hidden max-h-[800px]">
            <div className="flex justify-between items-center">
                <h1>{heading}</h1>
                <div className="bg-gray-200 w-4 h-4 rounded-md flex justify-center items-center text-xs">0</div>
            </div>
            <Cards />
        </div>
    );
};

export default Column;