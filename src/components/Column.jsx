import Cards from "./Cards";

const Column = ({ heading }) => {
    return (
        <div className="bg-gray-300 w-1/6 flex flex-col justify-center items-center">
            <h1>{heading}</h1>
            <Cards />
        </div>
    );
};

export default Column;