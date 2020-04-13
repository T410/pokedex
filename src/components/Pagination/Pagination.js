import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { chooseGen, dataUpdate } from "../../Store/Actions/Actions";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const shouldShow = useSelector((state) => state.paginationVis.visible);
  const dispatch = useDispatch();
  const handlePageChange = (e) => {
    dispatch(chooseGen(e.selected + 1));
  };

  return (
    <>
      {shouldShow ? (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={7}
          pageRangeDisplayed={7}
          onPageChange={handlePageChange}
          containerClassName={styles.pagination}
          subContainerClassName={[styles.pages, styles.pagination].join(" ")}
          activeClassName={styles.active}
        />
      ) : null}
    </>
  );
};

export default Pagination;
