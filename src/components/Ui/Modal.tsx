import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { createContext, MouseEvent, ReactNode, useContext, useRef } from "react";
import Button from "./Button";

const modalContext = createContext<TContext | null>(null)

type TModal = {
    modal:boolean;
    onClose: () => void;
    children ?: ReactNode;
}

type TContext = {
    onClose : () => void;
}

type THeader = {
    children:ReactNode;
}
type TBody = THeader;

const Modal = ({ modal, onClose }: TModal) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const handleClose = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
            onClose();

        }
    }

    return createPortal(
        <modalContext.Provider value={{ onClose }}>
            <div onClick={handleClose} className={cn('bg-gray-500/70 flex justify-center items-center inset-0 invisible h-screen absolute z-10',
                {
                    'visible': modal
                }

            )}>
                <div ref={containerRef} className="bg-white w-2/4 rounded-md p-5">
                   <Modal.Header> 
                    <h1>This is title</h1>
                    <Modal.ModalClose></Modal.ModalClose>
                   </Modal.Header>
                   <Modal.ModalBody>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iusto quo fugit expedita. Vero atque minus voluptatem, omnis optio delectus?</p>
                    <Button buttonName="complete modal" varient="outline" className="mt-5"></Button>
                   </Modal.ModalBody>
                    

                </div>
            </div>
        </modalContext.Provider>, document.getElementById('portal') as Element
    );
};



const ModalClose = () => {

    const { onClose } = useContext(modalContext) as TContext;

    return <button onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 bg-red-500 text-white rounded-md">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    </button>;
}

const Header = ({children}:THeader)=> {
    return <div className="flex justify-between items-center font-semibold text-lg">{children}</div>
}

const ModalBody = ({children}:TBody) => {
    return <div className="mt-5">{children}</div>
} 



Modal.ModalBody = ModalBody;
Modal.Header = Header;
Modal.ModalClose = ModalClose;

export default Modal;