import React from "react";

const HPMP = () => {
  return (
    <>
      <div className="status status-hp">
        <span>HP:</span>
        <i class="nes-icon is-medium heart" />
        <i class="nes-icon is-medium heart" />
        <i class="nes-icon is-medium heart" />
      </div>
      <div className="status status-mp">
        <span>MP:</span>
        <i class="nes-icon is-medium star" />
        <i class="nes-icon is-medium star" />
        <i class="nes-icon is-medium star" />
      </div>
    </>
  );
};

export default HPMP;
