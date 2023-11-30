import { cloneElement, useState } from "react";

import { Modal } from "flowbite-react";
import PropTypes from "prop-types";

function ShowModal({ product, button }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {button && cloneElement(button, { onClick: () => setOpenModal(true) })}
      <Modal
        popup
        size="xl"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="p-6">
          <div className="text-lg text-gray-900 md:text-xl dark:text-white">
            <h3 className="font-semibold ">{product.name}</h3>
            <p className="font-bold">${product.price}</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {product.description}
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Category
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {product.brand}/{product.category}
            </dd>
          </dl>
        </Modal.Body>
      </Modal>
    </>
  );
}

ShowModal.propTypes = {
  product: PropTypes.any,
  button: PropTypes.element,
};

export default ShowModal;
