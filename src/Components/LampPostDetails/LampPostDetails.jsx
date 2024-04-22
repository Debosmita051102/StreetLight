import React from "react";

const LampPostDetails = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "1", backgroundColor: "green", padding: "20px", margin: "10px", color: "white", minWidth: "200px" }}>
        <p>Lamp post 1</p>
        <p>Connection status: OK</p>
        <hr style={{ borderColor: "green", borderWidth: "2px", borderStyle: "solid" }} />
      </div>
      <div style={{ flex: "1", backgroundColor: "red", padding: "20px", margin: "10px", color: "white", minWidth: "200px" }}>
        <p>Lamp post 2</p>
        <p>Connection status: Broken</p>
        <hr style={{ borderColor: "red", borderWidth: "2px", borderStyle: "solid" }} />
      </div>
      <div style={{ flex: "1", backgroundColor: "green", padding: "20px", margin: "10px", color: "white", minWidth: "200px" }}>
        <p>Lamp post 3</p>
        <p>Connection status: OK</p>
        <hr style={{ borderColor: "green", borderWidth: "2px", borderStyle: "solid" }} />
      </div>
    </div>
  );
};

export default LampPostDetails;
