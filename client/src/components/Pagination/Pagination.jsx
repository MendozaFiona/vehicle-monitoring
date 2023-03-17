import React from "react";
import { StyledPagination } from "./styled";

const Pagination = ({
  totalPages,
  next,
  previous,
  page,
  setPage,
  currentPage,
}) => {
  let navigateOptions = [];

  if (totalPages > 0) {
    for (let i = 1; i <= totalPages; i++) {
      navigateOptions.push({ id: `${i}a`, name: i });
    }
  }

  const pageNavigate = (mode, count = 1) => {
    if (next && mode === "next") setPage(page + 1);
    if (previous && mode === "prev") setPage(page - 1);
    if (mode === "custom") setPage(count);
  };

  return (
    <StyledPagination className="grid">
      <button onClick={() => pageNavigate("prev")} disabled={!previous}>
        Previous
      </button>
      <select
        name="page"
        id="page"
        className="fm-number-opt"
        defaultValue={currentPage}
        onChange={(e) => pageNavigate("custom", e.target.value)}
      >
        {navigateOptions.length > 0 &&
          navigateOptions.map((btn) => (
            <option key={btn.id}>{btn.name}</option>
          ))}
      </select>
      <button onClick={() => pageNavigate("next")} disabled={!next}>
        Next
      </button>
    </StyledPagination>
  );
};

export default Pagination;
