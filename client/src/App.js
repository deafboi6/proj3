import React, { useEffect, useRef, useState } from "react";
import PieChart from "./utils/pieChart";
import Time from "./utils/displayTime";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
    } from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function App() {
    return (
        <div>
        <h2>This is the Start of Project 3!</h2>
        <h3>
            <Time />
        </h3>
        </div>
    );
}