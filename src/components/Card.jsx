
// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    return (
        <div className="bg-white w-full h-20">
            <img src={data.avatar} alt="" className="w-20 h-20 object-contain" />
        </div>
    );
};

export default Card;