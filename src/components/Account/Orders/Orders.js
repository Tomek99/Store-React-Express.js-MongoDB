import React from "react";
import styles from "./Orders.module.scss";
import orders from "../../../data/orders.json";
import OrderSummary from "./OrderSummary/OrderSummary";
import Support from "../Support/Support";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter/Filter";

function Orders() {
  const navigate = useNavigate();

  const [items, setItems] = useState(orders);
  const [pageNumber, setPageNumber] = useState(0);

  const ordersPerPage = 5;
  const pagesVisited = pageNumber * ordersPerPage;
  const pageCount = Math.round(items.length / ordersPerPage);

  const displayOrders = items
    .slice(pagesVisited, pagesVisited + ordersPerPage)
    .map((item) => <OrderSummary orderDetails={item} key={item.idNumber} />);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname: "/orders",
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };
  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Orders</header>
      <Filter />
      <div className={styles.divOrders}>{displayOrders}</div>
      <div className={styles.displayPage}>
        <ReactPaginate
          previousLabel={<RiArrowLeftSLine size={25} />}
          nextLabel="Next "
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          pageClassName={styles.pageNumbers}
        ></ReactPaginate>
      </div>
      <Support />
    </>
  );
}

export default Orders;