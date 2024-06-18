import React, {useState} from "react";
import './recentSales.css';
import CardFilter from "./CardFilter";
import RecentSalesTable from "./RecentSalesTable";
import data from "../data/info.json";

function RecentSales() {
  const [filter, setFilter] = useState('Today');

  const items = data.recentsales;
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange}/>
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items}/>
      </div>
    </div>
  )
}

export default RecentSales;