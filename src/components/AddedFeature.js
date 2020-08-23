import React from "react";
import { useDispatch } from 'react-redux';
import { removeFeatures } from "../actions/actions"

const AddedFeature = (props) => {
  const removeItems = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => removeItems(removeFeatures(props.feature))}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
