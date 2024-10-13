import { useState } from "react";
import Button from "../components/Ui/Button";
import Modal from "../components/Ui/Modal";


const Home = () => {
    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal((prev) => !prev);
    }

    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-7xl p-10 border ">
                    <Button onClick={() => setModal((prev) => !prev)} classname="w-full" varient="outline" buttonName="Open Modal"  ></Button>

                </div>
                
        </div>
        <Modal modal={modal} onClose={closeModal}/>
        </div>
    );
};

export default Home;