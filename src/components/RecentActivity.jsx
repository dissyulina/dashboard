import React, { useState } from "react";
import './recentActivity.css';
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import data from "../data/info.json";

function RecentActivity() {
  const [filter, setFilter] = useState('Today');
  const items = data.recentactivity;
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange}/>
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
          {
            items &&
            items.length > 0 &&
            items.map(item => <RecentActivityItem key={item._id} item={item}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default RecentActivity;