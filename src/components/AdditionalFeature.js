import React from "react";
import { addFeatures } from '../actions/actions';
import  { useDispatch }from 'react-redux';

const AdditionalFeature = (props) => {
  const addItems = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => addItems(addFeatures(props.feature))}
        className="button"
      >
        Add
      </button>
      {props.feature.name} + {props.feature.price}
    </li>
  );
};

export default AdditionalFeature;
