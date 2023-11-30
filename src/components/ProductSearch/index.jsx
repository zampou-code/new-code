import { Button, TextInput } from "flowbite-react";
import { HiPlus, HiSearch } from "react-icons/hi";

import CreateOrUpdateModal from "../CreateOrUpdateModal";
import PropTypes from "prop-types";

function ProductSearch({ crateProduct, onChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/2">
        <TextInput
          required
          size="sm"
          id="search"
          type="text"
          icon={HiSearch}
          placeholder="Search"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <CreateOrUpdateModal
          product={{
            id: 0,
            name: "",
            category: "",
            brand: "",
            description: "",
            price: 0,
          }}
          type="create"
          crateProduct={crateProduct}
          button={
            <Button color="blue" size="sm">
              <HiPlus className="mr-2 h-5 w-5" />
              Add product
            </Button>
          }
        />
      </div>
    </div>
  );
}

ProductSearch.propTypes = {
  onChange: PropTypes.func,
  crateProduct: PropTypes.func,
};

export default ProductSearch;
