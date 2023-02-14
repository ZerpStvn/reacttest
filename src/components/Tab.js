import React from "react";
function Tab({ label, onClick, active, children }) {
  return (
    <div className="tab-container">
      <button onClick={onClick} className={`tab ${active ? "active" : ""}`}>
        {label}
      </button>
      {active && <div className="tab-content">{children}</div>}
    </div>
  );
}

export default Tab;