import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfCOlor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHEXColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRGBColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          padding: "20px ",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setTypeOfCOlor("hex")}
          style={{ cursor: "pointer" }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfCOlor("rgb")}
          style={{ cursor: "pointer" }}
        >
          Create RGB Color
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHEXColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // gap: "10px",
          color: "White",
          marginTop: "50px",
        }}
      >
        <h1>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h1>
        <h1>{color} </h1>
      </div>
    </div>
  );
};

export default RandomColor;
