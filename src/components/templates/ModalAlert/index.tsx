import MainButton from "@/components/atoms/MainButton/index";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  modalState: boolean;
}

const Modal = ({ children, onClose, modalState }: ModalProps) => {
  return (
    <>
      {modalState ? (
        <div className="fixed z-1000 inset-0 bg-black bg-opacity-50 flex justify-center items-center p-3">
          <div className="bg-white p-12 rounded-[6px]">
            {children}
            <div className="flex justify-end">
              <MainButton text="Regresar" handleClick={onClose} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
