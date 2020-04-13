import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { chooseGen, dataUpdate } from "../../Store/Actions/Actions";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const handlePageChange = (e) => {
    dispatch(chooseGen(e.selected + 1));
  };

  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      pageCount={7}
      pageRangeDisplayed={7}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
