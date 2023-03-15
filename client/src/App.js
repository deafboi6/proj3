import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


export default function App() {

  const [currentHours, setCurrentHours] = useState(newDate.current.getHours());
  const [currentMinutes, setCurrentMinutes] = useState(
    newDate.current.getMinutes()
  );
  const [currentSeconds, setCurrentSeconds] = useState(
    newDate.current.getSeconds()
  );
  setInterval(() => {
    newDate.current = new Date();
    setCurrentHours(newDate.current.getHours());
    setCurrentMinutes(newDate.current.getMinutes());
    setCurrentSeconds(newDate.current.getSeconds());
  }, 1000);
  const nowTime = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
  useEffect(() => {
    console.log(nowTime);
  });
  const newDate = useRef(new Date());
  // ----ON STANDBY UNTIL HOMEPAGE IS READY---- //
  // const home = {
  //   name: "Home",
  //   amount: 15
  // };
  
  // const data = {
  //   labels: [home.name, "Groceries", "Insurance", "Car payment", "Utilities", "Savings", "Other"],
  //   datasets: [
  //     {
  //       data: [home.amount, 17, 12, 21, 7, 19, 5],
  //       backgroundColor: ["blue", "orange", "purple", "red", "green", "chocolate", "aqua"],
  //       cutout: "50%"
  //     },
  //   ]
  // };

  // const options = {};

  return (
    <div>
      <h1>Start of our project 3!</h1>
      <div>
        {/* ON STANBY UNTIL HOME PAGE IS READY */}
        {/* <Pie data = {data} options= {options} /> */}
      </div>
      <h3>{nowTime}</h3>
    </div>
  )
}
