import React from "react";

function Calculator() {
  return (
    <div
      style={{
        width: "250px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>Calculator</h2>

      {/* Display */}
      <input
        type="text"
        value="123+45"
        readOnly
        style={{
          width: "100%",
          height: "50px",
          marginBottom: "15px",
          fontSize: "20px",
          textAlign: "right",
          paddingRight: "10px",
        }}
      />

      {/* Buttons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>

        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Calculator;