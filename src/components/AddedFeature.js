import React from "react";
import { removeFeatures } from "../actions/actions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeatures(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = { removeFeatures: removeFeatures };

export default connect(null, mapDispatchToProps)(AddedFeature);
