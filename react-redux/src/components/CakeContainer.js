import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

// This is the component where we want to display the number of cakes and dispatch the action when user clicks buy cake button
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
