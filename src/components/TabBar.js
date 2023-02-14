import React, { useState } from "react";
import Tab from './Tab';
function TabBar({ tabs, activeTab, onTabChange }) {
    const [currentTab, setCurrentTab] = useState(activeTab);
  
    return (
      <div className="tab-bar">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              onClick={() => {
                setCurrentTab(index);
                onTabChange(index);
              }}
              active={index === currentTab}
            />
          ))}
        </div>
        <div className="tab-content-container">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              active={index === currentTab}
            >
              {tab.content}
            </Tab>
          ))}
        </div>
      </div>
    );
  
  }
export default TabBar;