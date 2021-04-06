import React from "react";
import "./ProfilePlan.css";

function ProfilePlan() {
  return (
    <div className="profilePlan">
      <div className="profilePlan__info">
        <h5>Netflix Standard</h5>
        <h6>1070p</h6>
        <button> Subcribes</button>
      </div>
      <div className="profilePlan__info">
        <h5>Netflix Basic</h5>
        <h6>480p</h6>
        <button> Subcribes</button>
      </div>
      <div className="profilePlan__info">
        <h5>Netflix Premium</h5>
        <h6>4K+HDR</h6>
        <button> Subcribes</button>
      </div>
    </div>
  );
}

export default ProfilePlan;
