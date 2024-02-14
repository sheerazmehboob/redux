import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

// This is the component where we want to display the number of cakes and dispatch the action when user clicks buy cake button
function NewCakeContainer(props) {

    const [number, setNumber] =useState(1);

  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <input type="text" name="" id="" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

// STEP-1:
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

// STEP-2:
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
