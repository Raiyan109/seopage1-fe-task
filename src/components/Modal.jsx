import axios from "axios";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, setShowModal }) => {
    const [file, setFile] = useState([])
    const modalRef = useRef()
    const navigate = useNavigate()

    const handleCloseModal = (e) => {
        const closeModal = setShowModal(!showModal)
        navigate('/')
    }

    const handleChange = (e) => {
        setFile(e.target.files)
        console.log(file);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key of Object.keys(file)) {
            formData.append('files', file[key]);
        }

        axios.post("http://localhost:5000/api/files/create", formData, {})
            .then(res => {
                console.log(res.data);
                setShowModal(false)
            });
    }



    return (
        <div ref={modalRef} className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10">
            <div className="mt-10 flex flex-col gap-5">
                <button className="place-self-end bg-gray-500 p-4 rounded-full" onClick={() => setShowModal(!showModal)}><IoMdClose /></button>
                <div className="flex justify-center items-center bg-orange-500 px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                    <h1 className="text-white text-2xl">Add New Item</h1>
                    <form className="space-y-10" onSubmit={onSubmit}>
                        <h1>React File Upload</h1>
                        <input type="file" name="files" onChange={handleChange} multiple />
                        <div className="flex items-center justify-center">
                            <button type="submit" className='bg-amber-400 text-orange-700 rounded-lg text-lg font-bold md:font-normal py-1 px-7 '>
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Modal;