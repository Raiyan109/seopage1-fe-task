import Cards from "./Cards";

const Column = ({ heading }) => {
    return (
        <div className="bg-gray-300 w-1/3 flex flex-col justify-center p-2 overflow-y-scroll">
            <h1>{heading}</h1>
            <Cards />
        </div>
    );
};

export default Column;