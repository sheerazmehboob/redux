import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  // This hook accepts a function as its parameter that is called selector function
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  // This hook returns a reference to the dispatch function from redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};
