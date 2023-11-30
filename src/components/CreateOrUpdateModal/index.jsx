import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { HiPencilAlt, HiPlus } from "react-icons/hi";
import { cloneElement, useState } from "react";

import PropTypes from "prop-types";

function CreateOrUpdateModal({
  type,
  button,
  product,
  crateProduct,
  updateProduct,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(product);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "update") {
      updateProduct(formData);
    }

    if (type === "create") {
      crateProduct(formData);
    }

    setOpenModal(false);
  }

  return (
    <>
      {button && cloneElement(button, { onClick: () => setOpenModal(true) })}
      <Modal
        show={openModal}
        size="xl"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header className="p-6">Add Product</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  required
                  id="name"
                  name="name"
                  type="text"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Type product name"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="brand" value="Brand" />
                </div>
                <TextInput
                  required
                  id="brand"
                  type="text"
                  name="brand"
                  value={formData?.brand}
                  onChange={handleInputChange}
                  placeholder="Type product brand"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  required
                  id="price"
                  type="text"
                  name="price"
                  value={formData?.price}
                  onChange={handleInputChange}
                  placeholder="$2999"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category" />
                </div>
                <Select
                  required
                  id="category"
                  name="category"
                  value={formData?.category}
                  onChange={handleInputChange}
                >
                  <option value="TV">TV</option>
                  <option value="PC">PC</option>
                  <option value="Gamming">Gamming</option>
                  <option value="Prones">Prones</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  required
                  rows={4}
                  id="description"
                  name="description"
                  onChange={handleInputChange}
                  value={formData?.description}
                  placeholder="Write product description here"
                />
              </div>
              <div className="sm:col-span-2">
                <Button color="blue" size="sm" className="w-full" type="submit">
                  {type === "update" ? (
                    <>
                      <HiPencilAlt className="mr-2 h-5 w-5" />
                      Edit product
                    </>
                  ) : (
                    <>
                      <HiPlus className="mr-2 h-5 w-5" />
                      Add product
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

CreateOrUpdateModal.propTypes = {
  type: PropTypes.string,
  product: PropTypes.any,
  button: PropTypes.element,
  crateProduct: PropTypes.func,
  updateProduct: PropTypes.func,
};

export default CreateOrUpdateModal;
