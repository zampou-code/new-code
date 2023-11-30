import { Button, Modal } from "flowbite-react";
import { cloneElement, useState } from "react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import PropTypes from "prop-types";

function DeleteModal({ productId, deleteProduct, button }) {
  const [openModal, setOpenModal] = useState(false);

  function handleDeleteProduct() {
    setOpenModal(false);
    deleteProduct(productId);
  }

  return (
    <>
      {button && cloneElement(button, { onClick: () => setOpenModal(true) })}
      <Modal
        popup
        size="md"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="z-10" />
        <Modal.Body className="-mt-8">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteProduct}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

DeleteModal.propTypes = {
  button: PropTypes.element,
  productId: PropTypes.number,
  deleteProduct: PropTypes.func,
};

export default DeleteModal;
