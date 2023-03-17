import React, { useState, useEffect } from "react";
import { StyledTable } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import { getDispatches, reset } from "../../reducer/dispatch/dispatchSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { dispatchListFilter } from "../../utils/data";
import DispatchTable from "../DispatchTable";
import Pagination from "../Pagination";

const DispatchItems = ({ setShow, formData, setFormData }) => {
  const dispatch = useDispatch();
  const { dispatches, isError, isLoading, message } = useSelector(
    (state) => state.dispatch
  );

  const { results, next, previous, totalPages, currentPage } = dispatches;

  const [filteredDispatches, setFilteredDispatches] = useState(results);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getDispatches(`page=${page}`));

    if (isError) {
      toast.error(message);
    }

    return () => {
      console.log("un/mount dispatch list");
      dispatch(reset());
    };
  }, [isError, message, dispatch, page]);

  useEffect(() => {
    setFilteredDispatches(results);
  }, [results]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleFilter = (e) => {
    const filter = e.target.value;

    if (filter === "ALL") {
      setFilteredDispatches(results);
    } else {
      setFilteredDispatches(
        results.filter((dispatch) => dispatch.status.toUpperCase() === filter)
      );
    }
  };

  return (
    <>
      <StyledTable>
        <select id="list_filter" name="list_filter" onChange={handleFilter}>
          {dispatchListFilter.map((filter) => (
            <option key={filter.id}>{filter.name}</option>
          ))}
        </select>
        <DispatchTable
          filteredDispatches={filteredDispatches}
          formData={formData}
          setFormData={setFormData}
          setShow={setShow}
        />
      </StyledTable>
      {totalPages && (
        <Pagination
          totalPages={totalPages}
          next={next}
          previous={previous}
          page={page}
          currentPage={currentPage}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default DispatchItems;
