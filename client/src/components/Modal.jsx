import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  const handleModal = (e) => {
    if (e.target.id == "modal") {
      closeModal();
    }
  };
  return (
    <>
      <div
        className="fixed inset-0 z-20 bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px] flex justify-center items-center duration-300 ease-in-out"
        id="modal"
        onClick={handleModal}
      >
        <div className="w-[85%] md:max-w-[500px] flex flex-col gap-2">
          <div
            className="text-xl font-bolder place-self-end hover:bg-red-500 text-white md:p-1 cursor-pointer duration-150 ease-out"
            onClick={() => closeModal()}
          >
            <AiOutlineClose />
          </div>
          <div className="bg-white rounded-md">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
