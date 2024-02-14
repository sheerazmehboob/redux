import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HooksCakeContainer() {
    // This accepts a function as a parameter & called as selector function. This function receives redux state as its argument.
    // useSelector Hook will return whatever is returned by this function in parameter.
    const numOfCakes = useSelector(state => state.numberOfCakes)

    // returns a reference to dispatch function from the redux store 
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer

// useSelector Hook is an equivalent to the mapStateToProps function so, to get the hold of redux state we use this hook.


// useDispatch Hook that is use to dispatch action to react redux.