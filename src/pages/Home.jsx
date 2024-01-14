import Column from "../components/Column";

const Home = () => {
    return (
        <div className="border-2 my-12 p-2 max-h-[100vh] w-[2000px] overflow-y-hidden overflow-x-scroll absolute">
            <div className="flex gap-4">
                <Column heading='Incomplete' />
                <Column heading='To Do' />
                <Column heading='Doing' />
                <Column heading='Under Review' />
                <Column heading='Completed' />
                <Column heading='Overviewed' />
                <Column heading='Incomplete' />
                <Column heading='Incomplete' />
            </div>
        </div>
    );
};

export default Home;