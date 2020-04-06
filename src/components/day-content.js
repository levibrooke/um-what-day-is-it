import React from "react";

const dayContent = (props) => {
  const data = props.data;
  const dayOfWeek = props.todayIs.toUpperCase();
  console.log('data', data);
  console.log('dayOfWeek', dayOfWeek);

  // filter by day, only keep the day
  const filteredData = data.filter(content => content.node.dayofweek.toUpperCase() == dayOfWeek);
  console.log('filteredData', filteredData);

  // randomly select
  const randomIndex = Math.floor(Math.random() * filteredData.length);
  console.log('randomIndex', randomIndex);

  return (
    <>
      <h2>{dayOfWeek}</h2>
      {/* media */}
    </>
  )

}

export default dayContent;
