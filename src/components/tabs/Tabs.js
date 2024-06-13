import React, { useState } from "react";
import "./styles.css";

const CustomTabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div className={`tabItem ${currentTabIndex === index ? "active" : ""  }`} onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
