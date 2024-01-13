import { useState } from "react";
import { ImAttachment } from "react-icons/im";
import Modal from "./Modal";
// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="bg-white w-full h-28 rounded-sm px-1 py-3 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <img src={data.avatar} alt="" className="w-3 h-3 object-contain" />
                    <h3 className="text-[10px] font-medium">{data.clientName}</h3>
                </div>
                <div className="flex items-center gap-1">
                    <img src={data.avatar} alt="" className="w-3 h-3 object-contain" />
                    <h3 className="text-[10px] font-medium">{data.sadikIstiak}</h3>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <img src={data.avatar} alt="" className="w-3 h-3 object-contain" />
                    <p className="text-[9px]">{data.lorem}</p>
                </div>
                <div className="flex items-center gap-1 bg-gray-300 rounded-sm">
                    <img src={data.avatar} alt="" className="w-2 h-2 object-contain" />
                    <p className="text-[9px]">{data.task}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <img src={data.avatar} alt="" className="w-2 h-2 object-contain" />
                <img src={data.avatar} alt="" className="w-2 h-2 object-contain" />
                <div className="bg-gray-300 w-4 h-4 rounded-full flex justify-center items-center">
                    <p className="text-[8px]">12+</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src={data.avatar} alt="" className="w-3 h-3 object-contain" />
                    <h3 className="text-[10px] font-medium">15</h3>
                </div>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setShowModal(true)}>
                    <ImAttachment size={10} />
                    <h3 className="text-[10px] font-medium">25</h3>
                </div>
                {showModal &&
                    <Modal setShowModal={setShowModal} showModal={showModal} />
                }
                <div className="flex items-center gap-1">
                    <img src={data.avatar} alt="" className="w-3 h-3 object-contain" />
                    <h3 className="text-[10px] font-medium">30-12-2022</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;