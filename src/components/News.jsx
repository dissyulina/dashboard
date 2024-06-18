import React, { useState } from "react";
import './main.css';
import data from "../data/info.json";
import CardFilter from "./CardFilter";
import NewsPostItem from "./NewsPostItem";

function News() {
  const [filter, setFilter] = useState('Today');
  const items = data.news;
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange}/>
      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h5>
        <div className="news">
          {
            items &&
            items.length > 0 &&
            items.map(item => <NewsPostItem key={item._id} item={item}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default News;