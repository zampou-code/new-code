import { Pagination } from "flowbite-react";
import { useState } from "react";

function ProductPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <Pagination
      showIcons
      nextLabel=""
      layout="table"
      totalPages={100}
      previousLabel=""
      currentPage={currentPage}
      onPageChange={onPageChange}
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
    />
  );
}

export default ProductPagination;
