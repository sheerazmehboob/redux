import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  // This hook accepts a function as its parameter that is called selector function
  const numOfIcecream = useSelector((state) => state.icecream.numberOfIcecream)
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
        <h2>Number of Icecreams - {numOfIcecream}</h2>
        <button onClick={() => {dispatch(ordered())}}>Order Icecream</button>
        <input type="number" name="" id="" value={value} onChange={(e)=> {setValue(parseInt(e.target.value))}} />
        <button onClick={() => {dispatch(restocked(value))}}>Restock Icecreams</button>
    </div>
  )
}
