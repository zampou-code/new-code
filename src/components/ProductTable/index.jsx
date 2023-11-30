import { Button, Table } from "flowbite-react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";

import CreateOrUpdateModal from "../CreateOrUpdateModal";
import DeleteModal from "../DeleteModal";
import PropTypes from "prop-types";
import ShowModal from "../ShowModal";

function ProductTable({ products, updateProduct, deleteProduct }) {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, i) => (
            <Table.Row
              key={i}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.brand}</Table.Cell>
              <Table.Cell className="max-w-[12rem] truncate">
                {product.description}
              </Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell align="right">
                <div className="flex items-center justify-end space-x-2">
                  <CreateOrUpdateModal
                    type="update"
                    product={product}
                    updateProduct={updateProduct}
                    button={
                      <Button color="blue" size="sm">
                        <HiPencilAlt className="mr-2 w-5 h-5" />
                        Edit
                      </Button>
                    }
                  />

                  <ShowModal
                    product={product}
                    button={
                      <Button color="light" size="sm">
                        <HiEye className="mr-2 w-5 h-5" />
                        Preview
                      </Button>
                    }
                  />

                  <DeleteModal
                    productId={product.id}
                    deleteProduct={deleteProduct}
                    button={
                      <Button
                        outline
                        color="failure"
                        size="sm"
                        className="text-red-400 hover:text-white"
                      >
                        <HiTrash className="mr-2 w-5 h-5" />
                        Delete
                      </Button>
                    }
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

ProductTable.propTypes = {
  products: PropTypes.any,
  updateProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ProductTable;
