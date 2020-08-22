import React from "react";
import { addFeatures } from "../actions/actions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeatures(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} + {props.feature.price}
    </li>
  );
};

const mapDispatchToProps = { addFeatures: addFeatures };

export default connect(null, mapDispatchToProps)(AdditionalFeature);
