import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()
    return (
        <div ref={modalRef} className="fixed inset-0 bg-black bg-opacity-10 blackdrop-blur-sm flex justify-center items-center z-10">
            <div className="mt-10 flex flex-col gap-5">
                <button className="place-self-end bg-gray-500 p-4 rounded-full" onClick={() => setShowModal(!showModal)}><IoMdClose /></button>
            </div>
            <div className="flex justify-center items-center bg-orange-500 px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                <h1 className="text-white text-2xl">Add New Item</h1>
                <form className="space-y-10" >


                    <div className="flex items-center justify-center">
                        <button type="submit" className='bg-amber-400 text-orange-700 rounded-lg text-lg font-bold md:font-normal py-1 px-7 '>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;