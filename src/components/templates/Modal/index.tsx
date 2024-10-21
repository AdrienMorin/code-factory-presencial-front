import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  modalState: boolean;
}

const Modal = ({ children, onClose, modalState }: ModalProps) => {
  return (
    <>
      {modalState ? (
        <div className="fixed z-1000 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-[6px]">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <TbArrowsDiagonalMinimize2 className="text-3xl" />
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
