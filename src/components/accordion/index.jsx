//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSleection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndex = cpyMultiple.indexOf(getCurrentId);
    // checks if the clicked element is present in cpyMultiple or not, returns -1 if not present and returns lenght if present so if not present push it into the array
    if (findIndex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndex, 1);
    console.log(cpyMultiple);
    setMultiple(cpyMultiple);
    console.log(findIndex);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSleection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3> {dataItem.question} </h3>
                <span> + </span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) != -1 ? (
                <div className="content"> {dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
